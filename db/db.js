import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myAppDB');

export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS plans (
        plan_id INTEGER PRIMARY KEY,
        plan_name TEXT
      );`
    );
  
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS weeks (
        week_id INTEGER PRIMARY KEY,
        plan_id INTEGER,
        week_number INTEGER,
        FOREIGN KEY (plan_id) REFERENCES plans (plan_id)
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS days (
        day_id INTEGER PRIMARY KEY,
        week_id INTEGER,
        day_number INTEGER,
        FOREIGN KEY (week_id) REFERENCES weeks (week_id)
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS exercises (
        exercise_id INTEGER PRIMARY KEY,
        day_id INTEGER,
        exercise_name TEXT,
        sets INTEGER,
        reps INTEGER,
        weight INTEGER,
        FOREIGN KEY (day_id) REFERENCES days (day_id)
      );`
    );
  });
  console.log('Database initialized');

}
export default db;