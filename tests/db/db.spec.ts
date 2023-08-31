const { query } = require('../../src/db/db');

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
