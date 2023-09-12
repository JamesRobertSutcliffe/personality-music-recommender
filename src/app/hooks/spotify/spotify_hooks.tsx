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