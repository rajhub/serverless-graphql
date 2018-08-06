import 'reflect-metadata';
import * as cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './ioc';
import './controller';
import { gqlServer } from './utils/graphql-server';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(cors());
  gqlServer.applyMiddleware({ app });
});

const build = server.build();
export { build as app };
