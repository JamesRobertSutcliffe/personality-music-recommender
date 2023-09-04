CREATE TABLE IF NOT EXISTS personality_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  personality_type_id INT NULL REFERENCES personality_types(id)
);

CREATE TABLE IF NOT EXISTS favorites (
  user_id INT REFERENCES users(id),
  song_id INT,
  PRIMARY KEY (user_id, song_id)
);

CREATE TABLE IF NOT EXISTS recommendations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  recommended_song_id INT
);

