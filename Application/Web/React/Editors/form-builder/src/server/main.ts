import fs from 'fs';
import express from 'express';
import { debug } from 'console';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.post('/write', (req, res) => {
    let response: NodeJS.ErrnoException | boolean | string = true;
    const path = req.body['path'];
    if (path) {
        // Open a new file with name input.txt and write Simply Easy Learning! to it.
        fs.writeFile(path, req.body['data'], function (err) {
            if (err) {
                response = err;
            } else {
                app.get('/read', (req, res) => {
                    let response: NodeJS.ErrnoException | boolean | string | Buffer = true;
                    const path = req.params['path'];
                    if (path) {
                        // Read the newly written file and print all of its content on the console
                        fs.readFile(path, function (err, data) {
                            if (err) {
                                response = err;
                            } else {
                                response = data;
                            }
                        });
                    } else {
                        response = 'invalid path';
                    }
                    res.send(response);
                })
            }
        });
    } else {
        response = 'invalid path';
    }
    res.send(response);
})

app.get('/read', (req, res) => {
    let response: NodeJS.ErrnoException | boolean | string | Buffer = true;
    const path = req.params['path'];
    if (path) {
        // Read the newly written file and print all of its content on the console
        fs.readFile(path, function (err, data) {
            if (err) {
                response = err;
            } else {
                response = data;
            }
        });
    } else {
        response = 'invalid path';
    }
    res.send(response);
})

app.set('port', process.env.PORT || port);

const server = app.listen(app.get('port'), () => {
    debug(`Example app listening at http://localhost:${port}`)
})
