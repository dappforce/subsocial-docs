---
id: fetch-roles
title: Fetch Roles & Permissions
description: Roles enable on-chain moderation for spaces in Subsocial Blockchain. Let's take a deep look on how you can fetch roles data.
displayed_sidebar: developSidebar
---

import IFrameViewer from '@site/src/components/IframeComponent';

Roles and Permissions as a functionality enable on-chain moderation for spaces entity on the Subsocial Blockchain. You can leverage the roles pallet from the SDK methods to choose who can do different activities in a space.

## Role
A role is a configuration created for a space with set of permissions that is created on-chain and can be granted to any Space or Account. These permissions can include CreatePosts, UpdateSpace, UpdateOwnPosts, HideOwnPosts, etc.


This section covers how you can fetch roles data from the JS SDK via different methods.

### Fetch Role By Id

This following example shows how you can fetch a role by its id.

```ts
  const roleId = '4'

  const substrateApi = await api.substrateApi

  const role = await substrateApi.query.roles.roleById(
    roleId 
  )

  console.log(role)
```

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/roles/by-role-id?iframe=true"
  />


### Fetch List of Users with Role

This following example shows how you can fetch list of users by a role id.

```ts
  const roleId = '4'

  const substrateApi = await api.substrateApi

  const users = await substrateApi.query.roles.usersByRoleId(
    roleId 
  )
  console.log(users)
```

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/roles/get-users?iframe=true"
  />

### Fetch Roles by Space Id

This following example shows how you can fetch all the roles of a space by its id.

```ts
  const spaceId = '1005'

  const substrateApi = await api.substrateApi

  const roleIds = await substrateApi.query.roles.roleIdsBySpaceId(
    spaceId 
  )
  console.log(roleIds)
```

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/roles/by-space-id?iframe=true"
  />

### Fetch Roles by User

This following example shows how you can fetch all the roles of a space by its id.

```ts
  const spaceId = '1005'

  const user = {
    Account: '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'
  }

  const substrateApi = await api.substrateApi

  const roleIds = await substrateApi.query.roles.roleIdsByUserInSpace(
    user,
    spaceId 
  )

  console.log(roleIds)
```

Try Live on the Playground:

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/roles/by-user?iframe=true"
  />


> Next up, we will see how you can create your custom roles for spaces and grant permission to users.
