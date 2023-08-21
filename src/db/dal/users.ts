import { query } from '../db'

function createUserTable() {
    const result = query(`
        CREATE TABLE Users (
            id INT
        )
    `)
    console.log(result)
}

createUserTable();