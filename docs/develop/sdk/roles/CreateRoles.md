---
id: create-roles
title: Create & Grant Roles
description: Roles enable on-chain moderation for spaces in Subsocial Blockchain. Let's take a deep look on how you can create custom roles for your space.
displayed_sidebar: developSidebar
---

import IFrameViewer from '@site/src/components/IframeComponent';

This section takes a deeper look into creating custom roles for your space and granting the access to accounts.

## Types of Roles

| Role Type            | Description                                                                                                                         |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| UpdateSpace          | Allows users to update the space, which could involve modifying the space bio, name, etc. |
| CreatePosts          | Grants the ability to create new posts within the Space. Users with this role can share their thoughts, ideas, or content with the community. |
| UpdateOwnPosts       | Permits users to update their own posts. This role allows individuals to make changes to the content, title, or other details of the posts they have created. |
| HideOwnPosts         | Enables users to hide their own posts from public view. This role provides users with the option to remove their posts from visibility. |
| UpdateAnyPost        | Allows users to update any post within the Space created. This role is usually assigned to moderators or administrators who can edit or modify posts created by other users. |
| HideAnyPost          | Grants the ability to hide any post within the Space. Users with this role can remove posts created by other users from public view. This role is often given to moderators to manage content. |
| CreateComments       | Permits users to create comments on posts within the Space. This role allows individuals to engage in discussions, provide feedback, or share additional information related to the posts. |
| UpdateOwnComments    | Enables users to update their own comments. This role allows individuals to edit or modify the content of the comments they have posted in response to various posts. |
| HideOwnComments      | Allows users to hide their own comments from public view. This role provides individuals with the option to remove their comments from visibility. |
| HideAnyComment       | Grants the ability to hide any comment within the space. Users with this role can remove comments made by other users from public view. |
| Upvote               | Allows users to upvote posts or comments within the space. This role indicates agreement or appreciation for the content or comments posted by other users. |
| Downvote             | Enables users to downvote posts or comments within the space. This role indicates disagreement or disapproval of the content or comments posted by other users. |


## Creating a new role

The following code snippet shows creating a new role using JS SDK:

```ts
  const spaceId = '1005'

  const substrateApi = await api.substrateApi

  const roleTransaction = substrateApi.tx.roles.createRole(
  spaceId, 
  null, // Time to Live. 
  null, // Content: IPFS cid or any description about the role. 
  ['CreatePosts', 'UpdateSpace', 'HideAnyComment'], // Permissions.
  )
```

Understanding the parameters of the method, createRole:

- Space Id: The exact space for which this role will be created & applicable
- Time to Live: The expiration time in terms of block number untill which the role is applicable
- Content: It represents any data you want to associate with the role, like description or information. It can be of type None, Other or IPFS. Here's an example of IPFS: 
  ```ts
    const aboutRoleCID = ''
    const spaceId = '1005'

    const substrateApi = await api.substrateApi

    const roleTransaction = substrateApi.tx.roles.createRole(
    spaceId, 
    null, // Time to Live. 
    {IPFS: aboutRoleCID}, // Content: IPFS cid or any description about the role. 
    ['CreatePosts', 'UpdateSpace', 'HideAnyComment'], // Permissions.
    )
  ```
- Permissions: Set of permissions this role will have like CreatePosts, UpdateSpace, etc.

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/roles/create?iframe=true"
  />


## Granting role to User

The role you created for a space that holds a set of permissions can be granted to a user to actually moderate your space.

```ts
  const roleId = '4'

  const users = [
    { Account: '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs' }, 
    { Space: '1' }
  ] // List of users to grant the role.

  const substrateApi = await api.substrateApi

  const roleTransaction = substrateApi.tx.roles.grantRole(
    roleId, 
    users 
  )
```

Notice that you can assign a role to a user 2 ways:
- By Account: Basically mentioning the user's address 
- By Space Id: Mentioning the Space Id of the user who can moderate

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/roles/grant?iframe=true"
  />

## Revoking role from User

The following exmaple shows how you can revoke role from a user:

```ts
  const roleId = '4'

  const users = [
    { Account: '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs' }, 
    { Space: '1' }
  ] // List of users to grant the role.

  const substrateApi = await api.substrateApi

  const roleTransaction = substrateApi.tx.roles.revokeRole(
    roleId, 
    users 
  )
```

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/roles/revoke?iframe=true"
  />


