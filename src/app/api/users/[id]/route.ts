import { NextResponse } from 'next/server'
import { query } from '@/db/db';

export async function PUT(req: Request, {params: {id}} : {params: any, id: string} ) {
  const { username, password, personality_type_id } = await req.json();

  const values = [];

  let queryString = 'UPDATE users SET ';

  if (username) {
    queryString += 'username = $' + (values.length + 1);
    values.push(username);
  }

  if (password) {
    if (values.length > 0) {
      queryString += ', ';
    }
    queryString += 'password = $' + (values.length + 1);
    values.push(password);
  }

  console.log('testttttttt')
    if(personality_type_id) {
        if (values.length > 0) {
        queryString += ', ';
        }
        queryString += 'personality_type_id = $' + (values.length + 1);
        values.push(personality_type_id);
    }

  queryString += ' WHERE id = $' + (values.length + 1) + ' RETURNING *';
  values.push(id);

  const updatedUser = await query(queryString, values);

  return NextResponse.json({ userObj: updatedUser.rows[0] }, { status: 200 })
}
