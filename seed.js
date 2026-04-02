const pool = require('./config/db');
const bcrypt = require('bcryptjs');

async function seed() {
  // Users
  const hashed = await bcrypt.hash('password', 10);
  await pool.query("INSERT INTO users (username, email, password) VALUES ('Alice', 'alice@example.com', $1)", [hashed]);
  await pool.query("INSERT INTO users (username, email, password) VALUES ('Bob', 'bob@example.com', $1)", [hashed]);

  // Documents
  const doc1 = await pool.query("INSERT INTO documents (title, owner_id, content) VALUES ('Project Plan', 1, 'Initial content') RETURNING id");
  const doc2 = await pool.query("INSERT INTO documents (title, owner_id, content) VALUES ('Design Doc', 2, 'Initial design') RETURNING id");

  // Comments
  await pool.query("INSERT INTO comments (document_id, user_id, content) VALUES ($1, 2, 'Looks good!')", [doc1.rows[0].id]);
  await pool.query("INSERT INTO comments (document_id, user_id, content) VALUES ($1, 1, 'Please review the design')", [doc2.rows[0].id]);

  // Tasks
  await pool.query("INSERT INTO tasks (document_id, title, assigned_to, status) VALUES ($1, 'Finalize Plan', 2, 'pending')", [doc1.rows[0].id]);
  await pool.query("INSERT INTO tasks (document_id, title, assigned_to, status) VALUES ($1, 'Review Design', 1, 'pending')", [doc2.rows[0].id]);

  console.log('Database seeded');
  process.exit();
}

seed();