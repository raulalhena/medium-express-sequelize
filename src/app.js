import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';

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

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 