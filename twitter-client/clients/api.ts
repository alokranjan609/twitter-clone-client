import { GraphQLClient } from "graphql-request";
import { headers } from "next/headers";
const isClient=typeof window!=='undefined'
export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: {
        Authorization:isClient? `Bearer ${window.localStorage.getItem('__twitter_token__')}`:"",
    }
});
