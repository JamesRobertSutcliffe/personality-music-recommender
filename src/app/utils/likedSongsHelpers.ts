async function fetchLikedSongs(userEmail: string) {
    const response = await fetch(`/api/liked-song?user_email=${userEmail}`);
    const data = await response.json();
    return data.rows;
}

async function isSongLikedInDb(userEmail: string, trackID: string): Promise<boolean> {
  const likedSongs = await fetchLikedSongs(userEmail);
  return likedSongs.some((song: {track_id: string}) => song.track_id === trackID)
}

async function toggleLikedSong(userEmail: string, trackID: string, isCurrentlyLiked: boolean): Promise<void> {
  const method = isCurrentlyLiked ? "DELETE" : "POST";

  await fetch("/api/liked-song", {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_email: userEmail, track_id: trackID }),
  });
}

export {
    fetchLikedSongs,
  isSongLikedInDb,
  toggleLikedSong
};
