import { createUser, getUser, IUser } from "../../../db/dal/user";
import { redirect } from "next/navigation";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const email = params.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "email is required" }), {
      status: 400,
    });
  }

  const dbUser = await getUser(email);

  return new Response(
    JSON.stringify({
      dbUser,
    })
  );
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const { email, personality_type } = body;
  const existingUser = await getUser(email);

  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  const newUser = await createUser({ email, personality_type });
  return new Response(JSON.stringify({ newUser }), { status: 200 });
}
