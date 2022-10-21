import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange',
    uri: 'https://api.thegraph.com/subgraphs/name/jorgelsc85/viralbsc',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// export const healthClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/index-node/graphql',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/bsc-blocks',
  }),
  cache: new InMemoryCache(),
})
