import * as dotenv from 'dotenv';
import * as express from 'express';


dotenv.config();

const app = express();
const port = (process.env.COMPONENT_PARAM_PORT) ? process.env.COMPONENT_PARAM_PORT : 4000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server started listening to port ${port}`));
