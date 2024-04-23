import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://mahlamaki.us-east-a.ibm.stepzen.net/api/Exercises/graphql'
const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY
const headers = {
    // 'Authorization': 'apikey mahlamaki::local.net+1000::344f363981814ef8e13bb559130c43c6c453fe0aa6742fd6ad92269c2b204d9b'
    'Authorization': `apikey ${apikey}`
}

const client = new GraphQLClient(endpoint, {
    headers
})

export default client