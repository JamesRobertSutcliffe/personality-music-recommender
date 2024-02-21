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
  toggleLikedSong
};
