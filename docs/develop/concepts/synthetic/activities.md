---
id: activities
title: Activities
displayed_sidebar: developSidebar
---

Activities includes all social activities that you do in Subsocial chain. It unifies all the events that occur on chain to one single query.
It supports events listed below:
1. Post - Created, Deleted, Updated, Shared, Moved
1. PostReaction - Created, Updated, Deleted
1. Space - Created, Updated, Followed, Unfollowed, OwnershipTransferAccepted
1. Account - Followed, Unfollowed
1. Profile - Updated
1. Comment - Created, Deleted, Updated, Shared
1. CommentReaction - Created, Updated, Deleted
1. CommentReply - Created, Deleted, Updated, Shared
1. CommentReplyReaction - Created, Updated, Deleted
1. UserName - Registered, Updated

You can filter or differentiate activities based on their events, where they are enums which corresponds to the event name. For example, `PostCreated`, `PostUpdated`, etc.

### Common Attributes
Common attributes that every activity has are listed as below:
- id
- account
- blockNumber
- eventIndex
- event
- date
- aggregated
- aggCount

Similar activities are grouped together and aggregated. The `aggregated` attribute is a boolean value that indicates whether the activity is aggregated or not. The `aggCount` attribute is the number of similar activities. Examples of similar activities mentioned before are when account A and B likes your post Z, or when account A and B follows your account. Those activities are considered similar activities the latest activity for that group will have the `aggregated` value to `true` with the `aggCount` corresponds to how many similar activities prior to the latest activity.

For example, in the case where 2 accounts like your post Z:
1. Account A likes your post Z - It will create 1 new activity, where the `aggregated` value is `true` and `aggCount` is 0.
2. Account B likes your post Z - It will create 1 new activity, where the `aggregated` value is `true` and `aggCount` is 1. And all the previous activity in that group will be updated with the `aggregated` value to `false`.

### Optional Attributes
Whereas listed below are the optional attributes which only filled if the attribute is related to the event:
- followingAccount
- space
- spacePrev
- newOwner
- oldOwner
- post
- reaction
- username

