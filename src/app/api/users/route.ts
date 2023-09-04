import { NextResponse } from 'next/server'
import { query } from '@/db/db';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const result = await query(
    'INSERT INTO users (username, password) VALUES (\$1, \$2) RETURNING id',
    [username, password]
  );

  const userId = result.rows[0].id;
  return NextResponse.json({ id: userId }, { status: 201 })
}
