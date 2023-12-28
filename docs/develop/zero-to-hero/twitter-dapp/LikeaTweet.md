---
id: like-tweet
title: Liking a Tweet
displayed_sidebar: developSidebar
---

We love interacting with tweets by giving them a ❤️

Let's add this functionality on the Dapp. Here's an example:

```tsx
  const postId = '1' // Post Id you want to react on.
  const substrateApi = await api.blockchain.api

  const reactionTx = substrateApi.tx.reactions.createPostReaction(postId, 'Upvote')
```

It's time to add this in the codebase inside of **tweet.tsx** like this:

```tsx
  // ...

  const ACCOUNT_STORAGE_KEY = 'connected_account'

  const TweetComponent: React.FC<ITweet> = props => {

    const { api } = useContext(SubsocialContext)

    const likeTweet = async () => {
      if(!api) return;

      const account = localStorage.getItem(ACCOUNT_STORAGE_KEY) ?? ''
      const substrateApi = await api.blockchain.api

      const reactionTx = substrateApi.tx.reactions.createPostReaction(props.id!, 'Upvote')
      polkadotjs.signAndSendTx(reactionTx, account, logTransaction)
    }

    ...
  }
  ...
```

Add an **onClick** listener for this method:

```tsx
...
  const TweetComponent: React.FC<ITweet> = props => {
    ...
      <div onClick={likeTweet} className="text-gray-500 select-none hover:text-pinkish anim flex items-center">
        <Heart color="white" height="20px" width="20px" />
        <span className="ml-3 mr-3 text-lg">{props.likes}</span>
      </div>
    ...
  }
```

