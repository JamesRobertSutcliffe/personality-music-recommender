```
title: Connecting and querying the database
keywords: #db #postgressql #connection #query 
```
To connect and query to the Database, we need to first import the `query` method from `db/db.ts` and then use the method with a string containing the required PostgresSQL query.
```js
// db.js
...

export const query = (text: string, params?: any[]) => pool.query(text, params);
```

## Example: text only
```js
// DAL file
import { query } from '../db';

async function asyncFunction() {
   const result = await query("SQL QUERY")
}
```

## Example: text and params
`query` also has an optional argument `params`, this allows us to pass variables to the query string.

```js
const userId = 1;
const result = await query('SELECT * FROM users WHERE id = \$1', [userId]);
```
