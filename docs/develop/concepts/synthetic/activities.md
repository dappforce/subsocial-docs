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

Similar activities are grouped together and aggregated. The `aggregated` attribute is a boolean value that indicates whether the activity is aggregated or not. The `aggCount` attribute is the number of similar activities that are aggregated together. One example of similar activities mentioned before is when account A and B likes your post Z. Those two are considered similar activities and will have one additional activity entry which is aggregated.
The flow of aggregation will be as follows:
1. Account A likes your post Z - It will create 2 new activities. 1 which is not aggregated, 1 which is aggregated.
2. Account B likes your post Z - It will create 1 new activity, which is not aggregated. It will also update the aggregated activity for that specific event, which updates the `aggCount` attribute to 2, and also points the account that does it to account B (latest activity).

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

