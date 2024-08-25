import { graphql } from "../../gql";

export const verifyUserGoogleToekn= graphql(`#graphql
 query verifyGoogleToekn($token:String!)
 {
verifyGoogleToken(token: $token)
 }
`)