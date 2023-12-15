---
id: active-staking
title: Active Staking
description: Active Staking lets you boost your SUB staking rewards by actively using Subsocial and interacting with the best creators.
keywords: [Subsocial, Staking, Rewards, Creators, Content, Polkadot]
---
*Active Staking is currently in Alpha.*

Active Staking allows stakers to boost their rewards by actively engaging with good content on the network. 
Active Staking is notably more complex than Passive Staking, so let's look at an example to see how it works.

If Alice stakes 700 SUB, she will also receive 700 points, which will reset daily. **For each post that Alice likes in a day, 
her rewards pot will increase by 10%, up to 100%** (this may be changed to, for example, a 5% increase per like instead of 10%). 
Every week, the system will take a snapshot of all posts created during the previous week and distribute rewards. 
If Alice liked a full 70 posts the previous week (10 likes per day), her rewards pot will be 100% full.
Alice will receive 50% of it, and the other 50% will be distributed to the authors of the posts Alice liked. 
If she liked more than 70 posts, her points will be split accordingly:

- 700 points / 10 likes → 70 points per like
- 700 points / 20 likes → 35 points per like

Thus, she can support more authors and content, but with fewer rewards for each. Her rewards will not be changed regardless of how many posts she liked,
as long as she liked at least 10 per day.

**If Alice earned 100 SUB in passive staking rewards the previous week, and liked enough posts to maximize her rewards pot, 
she will receive an extra 50 SUB, for a total of 150 SUB.** 
The other 50 SUB will be distributed to the authors of the posts that Alice liked, based on points.

In order to ensure a healthy % of stakers are active, a reward multiplier exists.

### The Magical Reward Multiplier

The Active Staking system includes a feature called the “Reward Multiplier,” which enhances the rewards you earn based on overall staker activity. Here’s how it works in simple terms:

1. **Base Calculation**: Your base rewards in the Active Staking system are determined by your passive staking rewards. For instance, if you earned 100 SUB through passive staking, that’s your starting point for Active Staking rewards.


2. **Multiplier Effect**: The multiplier effect kicks in based on how active the entire staker community is. The formula for this is: Your passive staking rewards multiplied by (1 divided by the percentage of total points used by all stakers last week).

- Example Scenario: Imagine there were 100 points in total available for use last week. If stakers collectively used 75 of those points, the calculation for the multiplier would be (1 / 0.75), which equals approximately 1.333.

3. **Calculating Your Rewards**: Using the multiplier, your rewards pot increases. In our example, with an Active Staking reward pot of 100 SUB and a multiplier of 1.333, your new reward pot would be 133 SUB (100 SUB times 1.333).

4. **Distribution of Rewards**: You receive 50% of this enhanced reward pot. So, in our example, you would earn 66.5 SUB (half of 133 SUB). The remaining 50% is distributed among the authors of the content you liked.

5. **Upper Limit of Multiplier**: There’s a cap to this multiplier effect, which is set at a maximum of 4x. This means that even if the formula suggests a number higher than 4, the maximum multiplier applied will still be 4x. For instance, if only 20% of last week’s points were used, the formula would yield 5 (1 / 0.20), but the multiplier would be capped at 4x.

![](../../../static/img/StakingRewardMultiplier.png)

This Reward Multiplier is designed to further motivate stakers to participate actively. The more active the community is, the higher the potential rewards, echoing the early days of Creator Staking.

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

### Joining The Alpha
To join the waitlist for the Active Staking alpha, you will need to join the [Active Stakers chat](https://grill.chat/creators/stakers-20132) on Grill.chat, 
log in with a Polkadot identity (Subsocial Username, KILT w3n, or Polkadot/Kusama on-chain identity) 
and enable at least one notification option. Make sure your account has some SUB staked too!

