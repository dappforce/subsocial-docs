---
id: notifications
title: Notifications
displayed_sidebar: developSidebar
---

Notifications consist of activities from other accounts which is related to your account. For example, if someone likes your post, or comments on your post, or shares your post, you will get a notification for that activity. You can use `notifications` query to get the notifications which can also be filtered by the account it belongs to. Or you can also use `accountById` query and get the `notifications` attribute.

### Example queries

#### Get Notifications for an account

Both queries below will result in same data:

```graphql
query GetNotifications($accountId: String!) {
  notifications(
    where: { account: { id_eq: $accountId } }
    orderBy: activity_date_DESC
    limit: 10
  ) {
    activity {
      # You can also get other activity data from here
      event
      date
      account {
        id
      }
    }
  }
}
```

```graphql
query GetNewsFeeds($accountId: String!) {
  accountById(id: $accountId) {
    feeds(orderBy: activity_date_DESC, limit: 10) {
      activity {
        # You can also get other activity data from here
        event
        date
        account {
          id
        }
      }
    }
  }
}
```

#### Get Feeds Count

You can get the count of the notifications using `notificationsConnection` query.

```graphql
query GetNotificationsCount($accountId: String!) {
  notificationsConnection(
    where: { account: { id_eq: $accountId } }
    orderBy: activity_date_DESC
  ) {
    totalCount
  }
}
```

:::info

One trick you can use to get the unread notifications count is to use `notificationsConnection` query and filter the notifications to only include activity with date more than the last read date.

```graphql
query GetNotificationsCount($accountId: String!, $lastReadDate: DateTime!) {
  notificationsConnection(
    where: {
      account: { id_eq: $accountId }
      activity: { date_gt: $lastReadDate }
    }
    orderBy: activity_date_DESC
  ) {
    totalCount
  }
}
```

Example variables:

```json
{
  "accountId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "lastReadDate": "2023-01-20T15:56:36.304Z"
}
```

:::
