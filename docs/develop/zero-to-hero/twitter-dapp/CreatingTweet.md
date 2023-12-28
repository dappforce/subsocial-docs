---
id: creating-tweet
title: Creating a Tweet
displayed_sidebar: developSidebar
---

To post a new tweet, we need to have a space. For the purpose of this tutorial, I created a new space using our [Playground](https://play.subsocial.network/writing-data/space/create).

**Space ID: 1059**

Now, Let's rewrite the **onTweetBtnClick** method of **src/components/tweet-box.tsx**.

```tsx
  import {
    IpfsContent
  } from '@subsocial/api/substrate/wrappers'

  // ...

  const SPACE_ID = '1059'
  const ACCOUNT_STORAGE_KEY = 'connected_account'

  const TweetBox: React.FC = () => {
    const [tweetData, setTweet] = useState('');

    const { api } = useContext(SubsocialContext)

    const onTweetBtnClick = async () => {
      if (!api) return;

      setTweet('')
      const accountAddress = localStorage.getItem(ACCOUNT_STORAGE_KEY) ?? ''

      const cid = await api.ipfs.saveContent({
        title: accountAddress,
        body: tweetData,
      })

      const substrateApi = await api.substrateApi
      const postTransaction = substrateApi.tx.posts.createPost(
        SPACE_ID,
        { RegularPost: null }, // Creates a regular post.
        IpfsContent(cid)
      )
      await polkadotjs.signAndSendTx(postTransaction, accountAddress, logTransaction)
    }

  ...
```
