import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import { sequelize } from './db/db.config.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey world!');
});

// END POINT: users
app.use('/users', userRouter);

// END POINT: posts
app.use('/posts', postRouter);

try{
  await sequelize.authenticate();
  console.log('Connection with DB stablished');
} catch(error) {
  console.log('DB not connected', error);
}

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 