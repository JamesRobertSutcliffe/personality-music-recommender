export async function fetchProfile(token: string) {
    const result = await fetch("https://api.spotify.com/v1/me/", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}

export async function fetchArtistAlbum(token: string) {
    const result = await fetch("https://api.spotify.com/v1/artists/4ePunOqQbOYoQwd1298g3Z/albums", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}

export async function fetchRecommendedTracks(token: string, personalityType: string) {
    if(!personalityType) return;

    const apiResponse = await fetch(`https://patdel0-personality-music-recommender.hf.space/recommend?mbti_type=${personalityType}&num_of_songs=10`);
    const trackSuggestions = await apiResponse.json();

    const trackFetchPromises = trackSuggestions.map((suggestion: {track_id: string}) => fetchTrackData(token, suggestion.track_id));
    const fetchedTracks = await Promise.all(trackFetchPromises);

    return fetchedTracks;
}

export async function fetchTrackData(token: string, trackId: string) {
    const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await result.json();
    return data;
}

export async function fetchUserTracks(token: string) {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}

export async function fetchUserPlaylists(token: string) {
    const result = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}
