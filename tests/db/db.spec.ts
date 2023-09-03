import { query, pool } from '../../src/db/db';

describe('Database Connection', () => {
  it('should establish a connection to the database', async () => {
    const client = await pool.connect();
    const isConnected = client.release() === undefined;
    expect(isConnected).toEqual(true);
  });
});

describe('query()', () => {
  it('should execute a SQL query', async () => {
    const result = await query('SELECT 1 as result');
    expect(result.rows[0].result).toEqual(1);
  });

  it('should handle optional parameters', async () => {
    const result = await query('SELECT $1 as value', ['test']);
    expect(result.rows[0].value).toEqual('test');
  });
});
