---
id: hot-posts
title: Hot Posts Algorithm
description: Hot Posts on PolkaVerse receive extra visibility after being frequently engaged with by users on the network.
keywords: [Subsocial, PolkaVerse, Posts, Hot, Content, Algorithm, Polkadot]
---

PolkaVerse has a [Hot Posts](https://polkaverse.com/?tab=posts&type=hot&date=week) tab, 
where users can see new posts that have received lots of engagement recently. 
This serves as an avenue for lesser known creators to have access to more eyeballs if one of their posts performs exceptionally well.

## The Algorithm

The Hot Posts feed is based on the Normalized Ranked Posts List, which is determined from the Original Ranked Posts List. Let's look at each of these.

### The Original Ranked Posts List

When a new post is created, it is added to the list with an initial value based on how many SUB the post creator has locked. 

When high quality comments (those that make it past the spam filter) are created on a post, the post receives 20 points.

When a post is liked, it receives 5 points.

At the end of the day, the scores of every post in the Original Ranked Posts List, that were posted within the last week, are reduced by 10%. 
This decay will cause older posts to slowly drop out of Hot Posts.

The exact formulas used for the ranking calculations are subject to frequent change as the platforms develops, 
which is why they are not listed here, as they may change frequently.


### The Normalized Ranked Posts List

In some situations, using only the Original Ranked Posts List could result in multiple posts from the same creator being shown together. 
To avoid this, the Normalized Ranked Posts List is used.

This list takes the Original Ranked Posts List and re-orders it so that posts from the same creator cannot be shown within 2-4 posts of each other. 
The list regenerates every five minutes to keep it up-to-date with the latest Original Ranked Posts List.

The Normalized Ranked Posts List is fed directly to the PolkaVerse UI to display on the [Hot Posts](https://polkaverse.com/?tab=posts&type=hot&date=week) tab.


