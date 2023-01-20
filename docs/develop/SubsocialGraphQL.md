---
id: subsocial-graqhql
title: Subsocial GraqhQL
displayed_sidebar: developSidebar
---

Building social apps need faster data fetching, and smoother experience for users.

Subsocial provides you the Subsocial's GraphQL endpoint, that can be used to query the blockchain instantaneously.

### Getting Started

You can add graphql and apollo client to a new or existing project.

To add create a new project, you can use [Subsocial Starter](/docs/develop/developer-quickstart).

Install the following dependencies:

```bash
yarn add @apollo/client graphql
```

### Setup

Our GraphQL API endpoint: 
https://squid.subsquid.io/subsocial/graphql

```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://squid.subsquid.io/subsocial/graphql'

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})
```

### Creating Queries

```ts

/* define a GraphQL query  */
export const explorePosts = gql`
query MyQuery {
  posts(orderBy: reactionsCount_DESC, limit: 3, where: {createdAtTime_gt: "2023-01-01T00:00:00.000000Z"}) {
    content
    title
    reactionsCount
    sharedPost {
      id
    }
    createdAtTime
    space {
      id
      name
      summary
    }
  }
}
`
```

The above query fetches the top 3 most liked posts of this year. 
You can choose the data you need about the query and leverage the power of GraphQL.

> Use the GraphQL [Playground](https://squid.subsquid.io/subsocial/graphql) to explore the queries. 


### Running Queries

```ts
const response = await client.query({ query: explorePosts })
```

Response:
```json
{
  "data": {
    "posts": [
      {
        "content": "bafyreigvgydzk42f2uynxlvrqdfmylhysopqgcctt6gxiwfc6jbmc5z73i",
        "title": "Trustless Bitcoin on Polkadot... So What's Next? - Space Monkeys 081",
        "reactionsCount": 2,
        "sharedPost": null,
        "createdAtTime": "2023-01-01T16:55:24.340000Z",
        "space": {
          "id": "4809",
          "name": "The Kusamarian",
          "summary": "Threads and Videos from the Jay Chrawnna vault"
        }
      },
      {
        "content": "bafyreieoory7axld6mw2i6gpwfxy3scesy4l65vawc7lcnwgbdsl6thbfy",
        "title": null,
        "reactionsCount": 1,
        "sharedPost": null,
        "createdAtTime": "2023-01-01T16:33:54.261000Z",
        "space": {
          "id": "10714",
          "name": "polbatona",
          "summary": "Web 3.0"
        }
      },
      {
        "content": "bafyreiacd3ae2maa3tbwu2eomsvysrfopowo6xmp4g2sprslfaapieayba",
        "title": "December 2022 In Review",
        "reactionsCount": 1,
        "sharedPost": null,
        "createdAtTime": "2023-01-03T15:13:36.362000Z",
        "space": {
          "id": "1",
          "name": "Subsocial",
          "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. Learn more"
        }
      }
    ]
  }
}
```

## More Examples

### News Feed
Get news feed of posts for an address.

This excludes: 
- Posts made by themselves
- Posts that are technically comments

```tsx
/* define a GraphQL query  */
export const getNewsFeed = gql`
  query GetNewsFeeds($address: String!, $offset: Int = 0, $limit: Int!) {
      accountById(id: $address) {
        feeds(
          limit: $limit
          offset: $offset
          orderBy: activity_date_DESC
          where: { activity: { account: { id_not_eq: $address }, post: { isComment_eq: false } } }
        ) {
          activity {
            post {
              id
              isComment
              title
            }
          }
        }
      }
    }
`
```

### Get Notifications
Get notification data for a specific address, with aggregated true as filter to make the notification show only once. 

> The amount of same notifcations that are aggregated is in aggCount.

```tsx
/* define a GraphQL query  */
export const getNotifications = gql`
  query GetNotifications($address: String!, $offset: Int = 0, $limit: Int!) {
      accountById(id: $address) {
        notifications(
          where: { activity: { aggregated_eq: true, account: { id_not_eq: $address } } }
          limit: $limit
          offset: $offset
          orderBy: activity_date_DESC
        ) {
          id
          activity {  
            aggCount
            aggregated
            post {
              id
              isComment
            }
            space {
              id
            }
            followingAccount {
              id
            }
            reaction {
              id
            }
          }
        }
      }
    }
`
```
