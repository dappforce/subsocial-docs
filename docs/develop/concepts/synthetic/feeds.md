---
id: feeds
title: Feeds
displayed_sidebar: developSidebar
---

Feeds consist of post activities which are created by accounts or published to spaces that you follow. Using this query, you can get personalized feeds for your users. The included activities are only creating posts and sharing posts. Comments are not included in feed.

You can use `newsFeeds` query to get the feeds which can also be filtered by the account it belongs to. Or you can also use `accountById` query and get the `feeds` attribute.

Example queries (Both queries below will result in same data):
```graphql
query GetNewsFeeds ($accountId: String!) {
  newsFeeds (where: { account: { id_eq: $accountId } }, orderBy: activity_date_DESC, limit: 10) {
    activity {
      post {
        id
        title
        body
      }
    }
  }
}
```

```graphql
query GetNewsFeeds ($accountId: String!) {
  accountById (id: $accountId) {
    feeds (orderBy: activity_date_DESC, limit: 10) {
      activity {
        post {
          id
          title
          body
        }
      }
    }
  }
}
```
