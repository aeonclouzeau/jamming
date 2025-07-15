import { RawSpotifyTrack } from "../types/Spotify";

const clientId = "f35f548e116b43579f4afb64ecb18afc";
const redirectUri = "http://localhost:5173/";
let accessToken: string;

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000); // token expiration
      window.history.pushState("Access Token", "", "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location.href = authUrl;
    }
  },

  search(term: string) {
    const accessToken = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        if (!resJson) {
          return [];
        }

        return resJson.tracks.items.map((track: RawSpotifyTrack) => ({
          id: track.id,
          name: track.name,
          album: track.album.name,
          artist: track.artists.map((a) => a.name).join(", "),
          images: track.album.images.map((i) => i.url),
          uri: track.uri,
        }));
      });
  },

  savePlaylist(name: string, uris: string[]) {
    if (!name || !uris.length) {
      return;
    }

    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId: string;

    return fetch("https://api.spotify.com/v1/me", { headers }) // Get user's id
      .then((res) => res.json())
      .then((resJson) => {
        userId = resJson.id;
        // Create Playlist using user's id
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers,
          method: "POST",
          body: JSON.stringify({ name: name }), // Pass in the playlist name as a string
        })
          .then((res) => res.json())
          .then((resJson) => {
            const playlistId = resJson.id; // Extract playlist id
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              { headers, method: "POST", body: JSON.stringify({ uris: uris }) } // Add the track uris to the user's playlist
            );
          });
      });
  },
};
