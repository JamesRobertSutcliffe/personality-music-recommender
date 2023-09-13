import { query } from "../../src/db/db";

async function tableExists(tableName: string) {
  const queryResult = await query(`
    SELECT EXISTS (
      SELECT FROM 
        information_schema.tables 
      WHERE 
        table_schema = 'public' AND 
        table_name = '${tableName}'
    );
  `);
  const existsValue = queryResult.rows[0].exists;
  return existsValue;
}

const tableNames: string[] = [
  "personality_types",
  "users",
  "liked_songs",
  "recommendations",
];
describe("Table creation", () => {
  tableNames.forEach((tableName) => {
    it(`should create the ${tableName} table`, async () => {
      const tableExistsValue = await tableExists(tableName);
      expect(tableExistsValue).toEqual(true);
    });
  });
});
