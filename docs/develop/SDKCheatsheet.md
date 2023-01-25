---
id: sdk-cheatsheet
title: SDK Cheatsheet
displayed_sidebar: developSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Here is a collection of the most commonly used methods within Subsocial SDK. For more in-depth look into this library, please reference the [TypeDocs](https://docs.subsocial.network/js-docs/js-sdk/index.html).
:::

## Setup

### Install

```bash
yarn add @subsocial/api
```

Add utils library:

```bash
yarn add @subsocial/utils
```

### Import

```typescript
import { SubsocialApi } from "@subsocial/api";
```

### Configuration

<Tabs
defaultValue="testnet"
values={[
{label: 'TestNet', value: 'testnet'},
{label: 'MainNet', value: 'mainnet'},
{label: 'LocalNet', value: 'localnet'},
]}>
<TabItem value="mainnet">

```ts
const config = {
  substrateNodeUrl: "wss://para.f3joule.space",
  ipfsNodeUrl: "https://ipfs.subsocial.network",
};
```

  </TabItem>
  <TabItem value="testnet">

```ts
const config = {
  substrateNodeUrl: "wss://rco-para.subsocial.network",
  ipfsNodeUrl: "https://gw.crustfiles.app",
};
```

  </TabItem>
  <TabItem value="localnet">

```ts
const config = {
  substrateNodeUrl: "http://127.0.0.1:9944",
  ipfsNodeUrl: "http://127.0.0.1:8080",
};
```

:::caution

Make sure to run local Subsocial & IPFS node before using these configs in your project.

:::
</TabItem>
</Tabs>

```typescript
const api = await SubsocialApi.create(config);
```

## Signing and sending transactions

```typescript
import { Keyring } from "@polkadot/keyring";

const keyring = new Keyring({ type: "sr25519" });
const accountPair = keyring.addFromMnemonic("add your mnemonic here");

tx.signAndSend(accountPair, async (result) => {
  const { status } = result;

  if (!result || !status) {
    return;
  }

  if (status.isFinalized || status.isInBlock) {
    const blockHash = status.isFinalized
      ? status.asFinalized
      : status.asInBlock;

    console.log(`✅ Tx finalized. Block hash: ${blockHash.toString()}`);
  } else if (result.isError) {
    console.log(JSON.stringify(result));
  } else {
    console.log(`⏱ Current tx status: ${status.type}`);
  }
});
```
Read more about signing & sending transactions [here](/docs/develop/sdk/transactions).

## Reading Data

### Space

Space is the place where all content on SubSocial lives. It holds multiple posts from different people depending upon the permission. [Read More](/docs/basics/glossary/overview#spaces)

<Tabs
defaultValue="byid"
values={[
{label: 'By Id', value: 'byid'},
{label: 'By Owner', value: 'owner'},
]}>
<TabItem value="byid">

```ts
const spaceId = 1;
const space = await api.findSpace({ id: spaceId });
```

  </TabItem>
  <TabItem value="owner">

```ts
const ownerAccountId = "<owner_account_public_key>";

// Fetching ids of all the spaces by owner.
const spaceIds = await api.blockchain.spaceIdsByOwner(ownerAccountId);

// Fetching space data from all ids.
const spaces = await api.base.findSpaces({ ids: spaceIds });
```

  </TabItem>
</Tabs>

Check full docs [here](/docs/develop/sdk/spaces/fetch-spaces).

### Post

Post is the piece of content that provides value for the readers. It can be some written text, an image, or a video. [Read More](/docs/basics/glossary/overview#posts)

<Tabs
defaultValue="byid"
values={[
{label: 'By Id', value: 'byid'},
{label: 'By Space Id', value: 'byspaceid'},
]}>
<TabItem value="byid">

```ts
const postId = 1;
const post = await api.findPost({ id: postId });
```

  </TabItem>
  <TabItem value="byspaceid">

```ts
const spaceId = 1;
const postIds = await api.blockchain.postIdsBySpaceId(spaceId);

const posts = await api.base.findPosts({ ids: postIds });
```

  </TabItem>
</Tabs>

Check full docs [here](/docs/develop/sdk/posts/fetch-posts).

### Profile

Profile is linked to your Subsocial account address, and is an overview of your activity on Subsocial. You can set a profile picture and a username for your account, as well as a personal website link.
[Read More](/docs/basics/glossary/overview#profile)

<Tabs
defaultValue="singleprofile"
values={[
{label: 'Single Account', value: 'singleprofile'},
{label: 'Multiple Accounts', value: 'multipleprofiles'},
]}>
<TabItem value="singleprofile">

```ts
const accountId = "<account_public_key>";
const profile = await api.base.findProfileSpace(accountId);
```

  </TabItem>
  <TabItem value="multipleprofiles">

```ts
const accountIds = ["<account_public_key_1>", "<account_public_key_2>"];
const profiles = await api.base.findProfileSpaces(accountIds);
```

  </TabItem>
</Tabs>

Check full docs [here](/docs/develop/sdk/profiles/fetch-profiles).

## Writing Data

### Note

To store data on IPFS, it is necessary to set up a CRUST IPFS account and push the data from your account. 

You set authHeader and setup with Subsocial SDK like this:
> This is only required for the Testnet. On the Mainnet, this will not work.

```js
const authHeader = 'c3ViLTVGQTluUURWZzI2N0RFZDhtMVp5cFhMQm52TjdTRnhZd1Y3bmRxU1lHaU45VFRwdToweDEwMmQ3ZmJhYWQwZGUwNzFjNDFmM2NjYzQzYmQ0NzIxNzFkZGFiYWM0MzEzZTc5YTY3ZWExOWM0OWFlNjgyZjY0YWUxMmRlY2YyNzhjNTEwZGY4YzZjZTZhYzdlZTEwNzY2N2YzYTBjZjM5OGUxN2VhMzAyMmRkNmEyYjc1OTBi';

api.ipfs.setWriteHeaders({
  authorization: "Basic " + authHeader,
});
```

### Space

Add following import statement:

```ts
import { IpfsContent, OptionBool } from "@subsocial/api/substrate/wrappers";
```

Storing space details in IPFS, and generating a CID.

```ts
const ipfsImageCid = await api.ipfs.saveFile(file);

const cid = await ipfs.saveContent({
  about:
    "Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS",
  image: ipfsImageCid,
  name: "Subsocial",
  tags: ["subsocial"],
});
```

Creating a Space transaction object

<Tabs
defaultValue="create"
values={[
{label: 'Create Space', value: 'create'},
{label: 'Update Space', value: 'update'},
]}>
<TabItem value="create">

```ts
const substrateApi = await api.substrateApi;
const spaceTransaction = substrateApi.tx.spaces.createSpace(
  IpfsContent(cid),
  null // Permissions config (optional)
);
```

  </TabItem>
  <TabItem value="update">

```ts
const substrateApi = await api.substrateApi;
const update = {
  content: IpfsContent(cid),
  hidden: new OptionBool(true),
};

const spaceTransaction = substrateApi.tx.spaces.updateSpace("1", update);
```

  </TabItem>
</Tabs>

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

Check the full docs [here](/docs/develop/sdk/spaces/create-spaces).

### Post

Add following import statement:

```ts
import { IpfsContent, OptionBool } from "@subsocial/api/substrate/wrappers";
```

Storing post details in IPFS, and generating a CID.

```ts
const ipfsImageCid = await api.ipfs.saveFile(file);

const cid = await ipfs.saveContent({
  title: "What is Subsocial?",
  image: ipfsImageCid,
  tags: ["Hello world", "FAQ"],
  body: "Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.",
});
```

Creating a post transaction object

<Tabs
defaultValue="regular"
values={[
{label: 'Regular Post', value: 'regular'},
{label: 'Shared Post', value: 'shared'},
{label: 'Update Post', value: 'update'},
]}>
<TabItem value="regular">

```ts
const spaceId = "1"; // The space in which you're posting.
const substrateApi = await api.substrateApi;
const postTransaction = substrateApi.tx.posts.createPost(
  spaceId,
  { RegularPost: null }, // Creates a regular post.
  IpfsContent(cid)
);
```

  </TabItem>
  <TabItem value="shared">

```ts
const spaceId = "1"; // The space in which you're posting.
const parentPostId = "2"; // The original post you want to share.

// Creating new sharedPostCid having shared message.
const sharedPostCid = await ipfs.saveContent({
  body: "Keep up the good work!",
});

const substrateApi = await api.substrateApi;
const postTransaction = substrateApi.tx.posts.createPost(
  spaceId,
  { SharedPost: parentPostId }, // Creates a shared post.
  IpfsContent(sharedPostCid)
);
```

  </TabItem>
  <TabItem value="update">

```ts
const postId = "7"; // Id of post which you want to update.
const substrateApi = await api.substrateApi;

const update = {
  content: IpfsContent(cid),
  hidden: new OptionBool(true),
};

const postTransaction = substrateApi.tx.posts.updatePost(postId, update);
```

  </TabItem>
</Tabs>

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

Check the full docs [here](/docs/develop/sdk/posts/create-posts).

### Profile

Add the following import statement:

```ts
import { IpfsContent } from "@subsocial/api/substrate/wrappers";
```

Storing profile details in IPFS, and generating a CID to add on blockchain:

```ts
const ipfsImageCid = await api.ipfs.saveFile(file);
const cid = await ipfs.saveContent({
  about: "Subsocial official account.",
  avatar: ipfsImageCid,
  name: "Subsocial",
});
```

:::note

Profiles in Subsocial is a simple space with it's Id marked on the blockchain to represent as profile.

:::info

Now, create a new space as mentioned [here](http://docs.subsocial.network/docs/develop/sdk-cheatsheet#space-1), so we can mark it as a profile.

Creating a profile object:

<Tabs
defaultValue="createprofile"
values={[
{label: 'Create Profile', value: 'createprofile'},
{label: 'Reset Profile', value: 'updateprofile'},
]}>
<TabItem value="createprofile">

```ts
const substrateApi = await api.substrateApi;

const spaceId = 3232; // The Id of space you want to mark as profile.
const profileTransaction = substrateApi.tx.profiles.setProfile(spaceId);
```

  </TabItem>
  <TabItem value="updateprofile">

```ts
const profileTransaction = substrateApi.tx.profiles.resetProfile();
```

  </TabItem>
</Tabs>

> To change profile data, update the profile space from it's id.

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

Check the full docs [here](/docs/develop/sdk/profiles/create-profiles).

## Comments

Comments are replies to a post that are visible below a post.

### Reading Comments

```ts
import { idToBn } from "@subsocial/utils";

const postId = "1";

// Get reply ids (comments) by parent post id and fetch posts by ids
const replyIds = await api.blockchain.getReplyIdsByPostId(idToBn(postId));

// For getting comments use posts functions
const replies = await api.findPublicPosts(replyIds);
```

### Writing Comments

<Tabs
defaultValue="commentToPost"
values={[
{label: 'Create', value: 'commentToPost'},
{label: 'Update', value: 'replyToComment'},
]}>
<TabItem value="commentToPost">

```ts
import { IpfsContent } from "@subsocial/api/substrate/wrappers";

const spaceId = "1"; // Optional.
const rootPostId = "1";
const cid = await ipfs.saveContent({
  body: "Keep up the good work!",
});

const substrateApi = await api.substrateApi;

const tx = substrateApi.tx.posts.createPost(
  spaceId,
  { Comment: { parentId: null, rootPostId } },
  IpfsContent(cid)
);
```

  </TabItem>
  <TabItem value="replyToComment">

```ts
import { IpfsContent } from "@subsocial/api/substrate/wrappers";

const spaceId = "1"; // Optional.
const parentId = "2"; // Parent comment id.
const rootPostId = "1";
const cid = await ipfs.saveContent({
  body: "Agree", // Reply message.
});

const substrateApi = await api.substrateApi;

const tx = substrateApi.tx.posts.createPost(
  spaceId,
  { Comment: { parentId, rootPostId } },
  IpfsContent(cid)
);
```

  </TabItem>
</Tabs>

Check the full docs [here](/docs/develop/sdk/comments/fetch-comments).

## Follows

### Check if follower

This checks if an account is following a particular space.

<Tabs
defaultValue="isSpaceFollower"
values={[
{label: 'Is Space Follower', value: 'isSpaceFollower'},
{label: 'Is Account Follower', value: 'isAccountFollower'},
]}>
<TabItem value="isSpaceFollower">

```ts
const accountId = "<any_public_key>";
const spaceId = "1";

const isFollower = await api.blockchain.isSpaceFollower(accountId, spaceId);
```

  </TabItem>
  <TabItem value="isAccountFollower">

```ts
const yourAccountId = "<any_public_key>";
const otherAccountId = "<any_public_key>";

const isFollower = await api.blockchain.isAccountFollower(
  yourAccountId,
  otherAccountId
);
```

  </TabItem>
</Tabs>

### Fetch list of followers

#### For Spaces

<Tabs
defaultValue="spacefollowers"
values={[
{label: 'By Space Id', value: 'spacefollowers'},
{label: 'Followed by Account Id', value: 'replyToComment'},
]}>
<TabItem value="spacefollowers">

```ts
const spaceId = "1";
const substrateApi = await api.substrateApi;
const res = await substrateApi.query.spaceFollows.spaceFollowers(spaceId);
const followersSpaceIds = res;
```

  </TabItem>
  <TabItem value="replyToComment">

```ts
const accountId = "<any_public_key>";
const substrateApi = await api.substrateApi;
const res = await substrateApi.query.spaceFollows.spacesFollowedByAccount(
  accountId
);
const followedSpaceIds = res;
```

  </TabItem>
</Tabs>

#### For Accounts

<Tabs
defaultValue="spacefollowers"
values={[
{label: 'Followers', value: 'spacefollowers'},
{label: 'Following', value: 'replyToComment'},
]}>
<TabItem value="spacefollowers">

```ts
const accountId = "<any_public_key>";
const substrateApi = await api.substrateApi;
const res = await substrateApi.query.accountFollows.accountFollowers(accountId);
const followersOfAccount = res;
```

  </TabItem>
  <TabItem value="replyToComment">

```ts
const accountId = "<any_public_key>";
const substrateApi = await api.substrateApi;
const res = await substrateApi.query.accountFollows.accountsFollowedByAccount(
  accountId
);
const followingOfAccount = res;
```

  </TabItem>
</Tabs>

Check the full docs [here](/docs/develop/sdk/follow/fetch-follow).

### Follow / Unfollow

#### For Spaces

<Tabs
defaultValue="spacefollowers"
values={[
{label: 'Follow', value: 'spacefollowers'},
{label: 'Unfollow', value: 'replyToComment'},
]}>
<TabItem value="spacefollowers">

```ts
const spaceId = "1";
const substrateApi = await api.substrateApi;
const tx = substrateApi.tx.spaceFollows.followSpace(spaceId);
```

  </TabItem>
  <TabItem value="replyToComment">

```ts
const spaceId = "1";
const substrateApi = await api.substrateApi;
const tx = substrateApi.tx.spaceFollows.unfollowSpace(spaceId);
```

  </TabItem>
</Tabs>

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

#### For Accounts

<Tabs
defaultValue="spacefollowers"
values={[
{label: 'Follow', value: 'spacefollowers'},
{label: 'Unfollow', value: 'replyToComment'},
]}>
<TabItem value="spacefollowers">

```ts
const accountIdToFollow = "<any_public_key>";
const substrateApi = await api.substrateApi;
const tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow);
```

  </TabItem>
  <TabItem value="replyToComment">

```ts
const accountIdToFollow = "<any_public_key>";
const substrateApi = await api.substrateApi;
const tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow);
```

  </TabItem>
</Tabs>

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

Check the full docs [here](/docs/develop/sdk/follow/create-follow).

## Reactions

Reactions are your signs to `Upvote` or `Downvote` a post.

### Get all reactions

<Tabs
defaultValue="single"
values={[
{label: 'Single Reaction', value: 'single'},
{label: 'Multiple Reactions', value: 'multi'},
]}>

  <TabItem value="single">

```ts
const myAccount = "<any_account_public_key>";
const reaction = await api.blockchain.getPostReactionIdByAccount(
  myAccount,
  "1"
);
```

  </TabItem>
  <TabItem value="multi">

```ts
import { ReactionId } from "@subsocial/api/types/substrate";

const myAccount = "<any_account_public_key>";

const substrateApi = await api.substrateApi;

const tuples = ["1", "2", "3"].map((postId) => [myAccount, postId]);

const reactionIds =
  await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples);
const reactions = await api.blockchain.findReactions(
  reactionIds as ReactionId[]
);
```

  </TabItem>
</Tabs>

### Reacting to a post

<Tabs
defaultValue="createReaction"
values={[
{label: 'Create', value: 'createReaction'},
{label: 'Update', value: 'updateReaction'},
{label: 'Delete', value: 'deleteReaction'},
]}>
<TabItem value="createReaction">

```ts
const postId = "1"; // Post Id you want to react on.
const substrateApi = await api.substrateApi;

const reactionTx = substrateApi.tx.reactions.createPostReaction(
  postId,
  "Upvote"
);
```

  </TabItem>
  <TabItem value="updateReaction">

```ts
const postId = "1"; // Post Id you want to update reaction on.
const reactionId = "2"; // Reaction Id to update.
const substrateApi = await api.substrateApi;

const reactionTx = substrateApi.tx.reactions.updatePostReaction(
  postId,
  reactionId,
  "Downvote"
);
```

  </TabItem>
  <TabItem value="deleteReaction">

```ts
const postId = "1"; // Post Id on which reaction you want to delete reaction.
const reactionId = "2"; // Reaction Id to delete.
const substrateApi = await api.substrateApi;

const reactionTx = substrateApi.tx.reactions.deletePostReaction(
  postId,
  reactionId
);
```

  </TabItem>
</Tabs>

Sign and send the transaction, [Check Here](/docs/develop/sdk/transactions)

Check the full docs [here](/docs/develop/sdk/reactions/create-reactions).
