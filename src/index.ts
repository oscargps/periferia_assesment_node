import express from 'express';
import { getVariable } from './config';
import healthRouter from './modules/core/router/health.router';

var debug = require('debug')('periferia:launchServer');
import cors from 'cors'

(async () => {
  try {
    const port = await getVariable('PORT');
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use('/', healthRouter);


    app.set('port', port);
    debug(`Port set to ${port}`);

    debug('Server created');

    app.listen(port);
  } catch (error) {
    debug(`[ERROR] Could not start application: ${error}`);
  }
})();