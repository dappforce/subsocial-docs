---
id: roles-and-permissions
title: Roles and Permissions
---

Roles and Permissions Subsocial natively offers four built-in and dynamic roles. Space owners can specify and then dynamically update the role for any Subsocial account, as well as designate which permissions are associated with that role.

The following are the four built-in roles:

| Role        | Description                              |
| ----------- | ---------------------------------------- |
| None        | No account can do this.                  |
| Everyone    | Any account on the Subsocial blockchain. |
| Follower    | Any account that follows a given space.  |
| Space owner | A current owner of a given space.        |

The roles can assume different permissions as desired by the space owner or moderate. As with other social media platforms it is important to define the permissions by considering the following questions:

- Who can create posts and comments in a space?
- Is it possible to edit a post or comment?
- Is it possible to delete a post or comment?
- Is it possible to upvote, downvote or share a post?
- ... and much more.

## Example: Twitter-like space

For example, if you want make your space similar to Twitter, you would implement permissions in your space as such:

- Only the owner can write posts to a given space.
- Disable editing of posts and comments.
- Disable downvotes.

Roles and permissions allow a space to be flexible, personal and define granular access control. This helps with the management of your space when it represents a group of people such as a community, an organization, or a team.
