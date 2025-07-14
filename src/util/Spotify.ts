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
};
