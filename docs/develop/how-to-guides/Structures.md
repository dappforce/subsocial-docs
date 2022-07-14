---
id: structures
title: Blockchain Structures
displayed_sidebar: developSidebar
---
**This section covers how spaces, posts, and reactions are related to each other.**

Subsocial uses a few building blocks to enable social networking. 

Here we will take a quick glimpse of how the major components such as Spaces, Posts, and Reactions are related.

![Space-Post-Reaction Relation](../../../static/img/space-post-reaction.png)

A short summary of each is provided below:

### Profiles
A [profile](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) is an overview of an account's activity on Subsocial.
Profiles can have a profile picture and name, as well as a short bio. 
Below your profile overview is a collection of all of your posts, comments, reactions, and Spaces. You can view others’ profiles to see this information about them.

> [Learn more in the Glossary](/docs/basics/glossary/overview#profile)

### Spaces
[Spaces](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html) are like directories or folders for posts.
All posts must be made inside of a Space. Think of a space like a subreddit, Facebook group, Twitter page, or Medium publication. 
Spaces have some profile features as well, such as Space pictures, names, and descriptions.

> [Learn more in the Glossary](/docs/basics/glossary/overview#spaces)

### Posts
[Posts](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html) 
are how to put content (such as text, audio, images, videos, or links) on Subsocial.
Posts are able to be commented on, reacted to, and shared.

> :exclamation: [Comments](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html) are also posts and have the same structure.  
> [Learn more in the Glossary](/docs/basics/glossary/overview#posts)

### Comments
[Comments](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html) are replies to a post, and are visible below a post.
Comments are treated as individual posts, but they are nested under the parent post.

### Reactions
[Reactions](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) are *upvoting* or *downvoting* a post (or comment).

> [Learn more in the Glossary](/docs/basics/glossary/overview#upvotes)

### Follows
A follow is when a user chooses to see posts of profiles or spaces in their content feed.
Users can follow other accounts/profiles as well as Spaces.
