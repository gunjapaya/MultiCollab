const pool = require('../config/db');

const createComment = async (docId, userId, content) => {
  const res = await pool.query(
    'INSERT INTO comments (document_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
    [docId, userId, content]
  );
  return res.rows[0];
};

const getCommentsByDoc = async (docId) => {
  const res = await pool.query('SELECT * FROM comments WHERE document_id=$1 ORDER BY created_at ASC', [docId]);
  return res.rows;
};

module.exports = { createComment, getCommentsByDoc };