---
id: split-reputation
title: Split reputation
displayed_sidebar: homeSidebar
---

One key mechanism that we are building is to enable reputation per space and per tag.
Compare this to Reddit which only has one reputation system: general reputation for the whole
website, rather than a reputation level specific to individual subreddits. This generic 
karma (reputation) does not accurately reflect where reputation is earned. Experts in 
financial markets are unlikely to be experts in surgery.

What we are planning is more like the split reputation system on Stack Overflow (Stack Exchange).
Taking this approach allows for advanced features using your specific reputation:

- When voting on a poll, your reputation for that space can be used to add weight to your vote.
- When participating in a challenge or contest with incentives, reputation in a particular
space can be used as a multiplier to determine a share of the rewards. Fair rewards require
a specific reputation.

Given the customization that is enabled by smart contracts, spaces could extend or override the
reputation system built into the base chain. Space owners or their community members can
create alternative formulas for how to calculate reputation and how to use it.
