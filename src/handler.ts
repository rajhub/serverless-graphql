import { app } from './app';
import * as sls from 'serverless-http';
export const run = sls(app);
