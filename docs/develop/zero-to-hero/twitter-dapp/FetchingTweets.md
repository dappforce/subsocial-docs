---
id: fetching-tweet
title: Fetching Tweets
displayed_sidebar: developSidebar
---

Now that we have added the logics to create a new tweet, it's time to fetch all the tweets in the UI list we created earlier:

![Tweet UI](../../../../static/img/twitter-dapp/tweet.png)

### Fetching tweets

To fetch tweets, we can simply use the **findPosts** method of the **api**.

Example:
```tsx
  const spaceIdForTweets = '1059'
  const tweetIds = await api.blockchain.postIdsBySpaceId(spaceIdForTweets)

  const tweets = await api.base.findPosts({ids: tweetIds})
```

Now, lets put this logic inside a useEffect hook on the **home.tsx** file.

```tsx
  const HomeScreen = () => {
    // ...

    const [tweets, setTweets] = useState<ITweet[]>([])

    const { api, isReady } = useContext(SubsocialContext)

    const fetchTweets = async () => {
      if (!api) return;

      const spaceIdForTweets = '1059'
      const tweetIds = await api.blockchain.postIdsBySpaceId(spaceIdForTweets)

      const tweets = await api.base.findPosts({ ids: tweetIds })
      console.log(tweets)
      setTweets(tweets.map((tw) => {
        const t: ITweet = {}
        t.id = tw.struct.id.toString();
        t.description = tw.content?.body;
        t.name = tw.content?.title; 
        t.avatar = 'https://i.pravatar.cc/300';
        t.likes = tw.struct.upvotesCount.toNumber();
        return t;
      }))
    }

    useEffect(() => {
      fetchTweets()
    }, [isReady])

    // ...
  }
```
