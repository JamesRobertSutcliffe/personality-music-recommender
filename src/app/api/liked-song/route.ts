import { getLikedSongs, addLikedSong, removeLikedSong } from "../../../db/dal/likedSong";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const email = params.get("user_email");

  if (!email) {
    return new Response(JSON.stringify({ error: "email is required" }), {
      status: 400,
    });
  }

  const likedSongs = await getLikedSongs(email);

  return new Response(JSON.stringify( {...likedSongs} ));
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const { user_email, track_id } = body;

  const likedSong = await addLikedSong(user_email, track_id);

  return new Response(
    JSON.stringify({ message: `Track ${track_id} liked succesffully` }),
    { status: 201 }
  );
}

export async function DELETE(request: Request): Promise<Response> {
  const body = await request.json();
  const { user_email, track_id } = body;

  const removedSong = await removeLikedSong(user_email, track_id);

  return new Response(
    JSON.stringify({ message: `Track ${body.track_id} deleted succesffully` }),
    { status: 200 }
  );
}
