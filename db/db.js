import * as SQLite from 'expo-sqlite';

let db;

export const initializeDatabase = async () => {
  db = await SQLite.openDatabaseAsync('databaseName');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS plans (
      plan_id INTEGER PRIMARY KEY,
      plan_name TEXT
    );
    CREATE TABLE IF NOT EXISTS weeks (
      week_id INTEGER PRIMARY KEY,
      plan_id INTEGER,
      week_number INTEGER,
      FOREIGN KEY (plan_id) REFERENCES plans (plan_id)
    );
    CREATE TABLE IF NOT EXISTS days (
      day_id INTEGER PRIMARY KEY,
      week_id INTEGER,
      day_number INTEGER,
      FOREIGN KEY (week_id) REFERENCES weeks (week_id)
    );
  `);
  console.log('Database initialized');
};

export { db };