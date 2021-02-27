import fs from 'fs';
import express from 'express';
import { debug } from 'console';
import cors from 'cors';
import { path } from './constants';
// var eol = require('eol');

const app = express();
const port = 3005;
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.get('/getDefaultPath', (req, res) => {
    res.send(path);
})

app.post('/write', (req, res) => {
    const path = req.body?.['path'];
    const data = req.body?.['data'];
    if (path) {
        fs.writeFile(path, data, function (error) {
            if (error) {
                res.send(error);
            } else {
                let result = '';
                const stream = fs.createReadStream(path);
                stream.on('data', function (chunk) {
                    result += chunk.toString();
                });

                stream.on('end', function () {
                    res.send(result);
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
        let result = '';
        const stream = fs.createReadStream(path);
        stream.on('data', function (chunk) {
            result += chunk.toString();
            // result += eol.auto(chunk.toString());
        });

        stream.on('end', function () {
            res.send(result);
        });
        // fs.readFile(path, function (error, data) {
        //     if (error) {
        //         res.send({ error });
        //     } else {
        //         res.send(data);
        //     }
        // });
    } else {
        res.send({ error: 'Invalid Path' });
    }
})

app.set('port', process.env.PORT || port);

const server = app.listen(app.get('port'), () => {
    debug(`Example app listening at http://localhost:${port}`)
})
