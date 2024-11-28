import express from 'express';
import router from './routes/index';

const app = express();
app.use(router);
app.listen(1245, () => {
  console.log('Server starting at localhost:1245/');
});

export default app;
