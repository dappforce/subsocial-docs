---
id: split-reputation
title: Split reputation
displayed_sidebar: homeSidebar
---

One key mechanism that we are building is to enable reputation per space and per tag.
Compare this to Reddit which only has one reputation system: general reputation for the whole
website, rather than specific reputation per subreddit. This generic karma (reputation) does not
accurately reflect where reputation is earnt. Experts in financial markets are unlikely to be
experts in, say, football and surgery.

What we are planning is more like the split reputation on Stack Overflow (Stack Exchange).
Taking this approach allows for advanced features using your specific reputation:

- When casting a vote on a poll post, your per space reputation can be used to weight
your vote.
- When participating in a challenge or contest with incentivisation, reputation in a particular
space can be used as a coefficient to determine a share in reward. Fair rewards require
a specific reputation.

Given the customization that is enabled by smart contracts, spaces could extend or override the
reputation system built into the base chain. Space owners or their community members can
create alternative formulas for how to calculate reputation and how it is used.