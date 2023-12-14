---
id: active-staking
title: Active Staking
description: Active Staking lets you boost your SUB staking rewards by actively using Subsocial and interacting with the best creators.
keywords: [Subsocial, Staking, Rewards, Creators, Content, Polkadot]
---

Active Staking allows stakers to boost their rewards by actively engaging with good content on the network. 
Active Staking is notably more complex than Passive Staking, so let's look at an example to see how it works.

If Alice stakes 700 SUB, she will also receive 700 points, which will reset daily. For each post that Alice likes in a day, 
her rewards pot will increase by 10%, up to 100% (this may be changed to, for example, a 5% increase per like instead of 10%). 
Every week, the system will take a snapshot of all posts created during the previous week and distribute rewards. 
If Alice liked a full 70 posts the previous week (10 likes per day), her rewards pot will be 100% full.
Alice will receive 50% of it, and the other 50% will be distributed to the authors of the posts Alice liked. 
If she liked more than 70 posts, her points will be split accordingly:

- 700 points / 10 likes → 70 points per like
- 700 points / 20 likes → 35 points per like

Thus, she can support more authors and content, but with fewer rewards for each. Her rewards will not be changed regardless of how many posts she liked,
as long as she liked at least 10 per day.

If Alice earned 100 SUB in passive staking rewards the previous week, and liked enough posts to maximize her rewards pot, 
she will receive an extra 50 SUB, for a total of 150 SUB. The other 50 SUB will be distributed to the authors of the posts that Alice liked, based on points.

In order to ensure a healthy % of stakers are active, a reward multiplier exists.

### Reward Multiplier

Alice’s reward pot will remain at 1x of passive staking rewards (assuming they liked enough posts) if 100% of stakers are active, 
but as the % of active stakers decreases, Alice’ reward pot will increase in size with the following formula:

**Alice’s passive staking rewards x (1 / the % of last week’s TOTAL points that were used)**

![](../../../static/img/StakingRewardMultiplier.png)

For example, let’s say there was 100 SUB staked last week, meaning there were 100 points available to use. 
If 75 of the points available last week were used, the formula would be (1 / .75) = 1.333. 
If Alice earned 100 SUB in passive staking rewards last week, and liked enough posts to maximize her rewards pot, her pot will receive 133 SUB (100 * 1.33).
Alice will receive 50% of this, for a total of 166.5 SUB in staking rewards, and 66.5 SUB will be split among the authors of the posts that Alcie liked.

However, the multiplier’s upper limit is 4x. Even if only 20% of last week’s points were used, which would yield a 5 from this formula, 
the reward multiplier will only go to 4x.

The Active Staking system will encourage users to log in everyday and interact with the network (just like everyone does with Facebook, X, etc.), 
as well as providing some possible incentives for authors that are not officially Registered Creators on Subsocial yet. 
On top of that, the system will provide a great signal about which authors should be added as Registered Creators, 
if they consistently receive lots of points on their posts.

### Rules
Points are only used when liking posts that were posted within the last 7 days by authors that have a Subsocial Usernames and some staked SUB. 
Liking a post from an author without a Subsocial Username and some stake will not increase your rewards pot, and authors cannot like their own posts.

### Rewards
Tokens for Active Staking will likely come from inflation, but may be sourced from the Subsocial treasury during the Alpha period, 
depending on an on-chain vote. 
The first month of the Active Staking alpha will use up to 803,520 SUB, depending on the percent of stakers that become active.

To join the waitlist for the Active Staking alpha, you will need to join the [Active Stakers chat](https://grill.chat/creators/stakers-20132) on Grill.chat, 
log in with a Polkadot identity (Subsocial Username, KILT w3n, or Polkadot/Kusama on-chain identity) 
and enable at least one notification option. Make sure your account has some stake too!

