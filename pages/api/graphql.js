import JsonGraphqlServer from 'json-graphql-server';

import data from '../../db/data.js';

const handler = JsonGraphqlServer(data);

export default handler;
