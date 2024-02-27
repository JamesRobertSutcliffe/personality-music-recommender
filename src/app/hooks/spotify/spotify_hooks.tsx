// Fetch User Profile Data

export async function fetchProfile(token: string) {
  const result = await fetch("https://api.spotify.com/v1/me/", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await result.json();
}

// Fetch Users Top Tracks

export async function fetchUserTracks(token: string) {
  const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await result.json();
}

// Fetch Personality Type Tracks

export async function fetchRecommendedTracks(token: string, personalityType: string) {
  if (!personalityType) return;

  const apiResponse = await fetch(`https://patdel0-personality-music-recommender.hf.space/recommend?mbti_type=${personalityType}&num_of_songs=20`);
  const trackSuggestions = await apiResponse.json();
  const trackFetchPromises = trackSuggestions.map((suggestion: { track_id: string }) => fetchTrackData(token, suggestion.track_id));
  const fetchedTracks = await Promise.all(trackFetchPromises);

  return fetchedTracks;
}

export async function fetchLikedSongs(token: string, userEmail: string) {
  const response = await fetch(`/api/liked-song?user_email=${userEmail}`);
  const data = await response.json();
  const songIds = data.rows.map((song: { track_id: string }) => song.track_id);

  const songPromises = songIds.map((songId: string) => fetchTrackData(token, songId));
  const fetchedSongs = await Promise.all(songPromises);
  return fetchedSongs;
}

export async function fetchTrackData(token: string, trackId: string) {
  const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await result.json();
  return data;
}

// Fetch Personality Type Albums

export async function fetchAlbumData(token: string, albumId: string) {
  const result = await fetch(`https://api.spotify.com/v1/albums?ids=${albumId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await result.json();
  return data;
}

export async function fetchUserPlaylists(token: string) {
  const result = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  return await result.json();
}
