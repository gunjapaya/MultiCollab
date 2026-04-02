const pool = require('../config/db');

const createTask = async (docId, title, assignedTo) => {
  const res = await pool.query(
    'INSERT INTO tasks (document_id, title, assigned_to, status) VALUES ($1, $2, $3, $4) RETURNING *',
    [docId, title, assignedTo, 'pending']
  );
  return res.rows[0];
};

const getTasksByDoc = async (docId) => {
  const res = await pool.query('SELECT * FROM tasks WHERE document_id=$1 ORDER BY created_at ASC', [docId]);
  return res.rows;
};

module.exports = { createTask, getTasksByDoc };