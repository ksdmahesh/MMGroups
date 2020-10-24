import fs from 'fs';
import express from 'express';
import { debug } from 'console';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3005;
app.use(bodyParser.json());
app.use(cors());

app.post('/write', (req, res) => {
    const path = req.body?.['path'];
    const data = req.body?.['data'];
    if (path) {
        fs.writeFile(path, data, function (error) {
            if (error) {
                res.send(error);
            } else {
                fs.readFile(path, function (error, data) {
                    if (error) {
                        res.send({ error });
                    } else {
                        res.send(data);
                    }
                });
            }
        });
    } else {
        res.send({ error: 'Invalid Path' });
    }
})

app.get('/read', (req, res) => {
    const path = req.query?.['path']?.toString();
    if (path) {
        fs.readFile(path, function (error, data) {
            if (error) {
                res.send({ error });
            } else {
                res.send(data);
            }
        });
    } else {
        res.send({ error: 'Invalid Path' });
    }
})

app.set('port', process.env.PORT || port);

const server = app.listen(app.get('port'), () => {
    debug(`Example app listening at http://localhost:${port}`)
})
