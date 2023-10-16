import { GraphQLClient } from 'graphql-request';
API_ENDPOINT = 'http://localhost:8000/graphql'

export const client = new GraphQLClient(API_ENDPOINT);