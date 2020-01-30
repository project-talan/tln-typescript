import * as express from 'express';

const app = express();
const port = 9080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server started listening to port ${port}`));
