#!/usr/bin/node

import app from './routes/index';

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at localhost:${port}/`);
});
