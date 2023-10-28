import {
  getLikedSongs,
  addLikedSong,
  removeLikedSong,
} from "../../../db/dal/likedSong";
import {
  getEmailFromRequest,
  getBodyFromRequest,
  constructErrorResponse,
  constructSuccessResponse,
} from "../helpers";

export async function GET(request: Request): Promise<Response> {
  const email = getEmailFromRequest(request);

  if (!email) {
    return constructErrorResponse("email is required", 400);
  }

  const likedSongs = await getLikedSongs(email);
  return new Response(JSON.stringify(likedSongs));
}

export async function POST(request: Request): Promise<Response> {
  const { user_email, track_id } = await getBodyFromRequest(request);

  await addLikedSong(user_email, track_id);
  return constructSuccessResponse(`Track ${track_id} liked successfully`, 201);
}

export async function DELETE(request: Request): Promise<Response> {
  const { user_email, track_id } = await getBodyFromRequest(request);

  await removeLikedSong(user_email, track_id);
  return constructSuccessResponse(
    `Track ${track_id} deleted successfully`,
    200
  );
}
