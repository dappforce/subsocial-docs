---
id: about-subsocial
title: What is Subsocial?
displayed_sidebar: developSidebar
---

Subsocial is a set of Substrate pallets that allows anyone to launch their own decentralized censorship-resistant social network.

The Subsocial SDK is a set of developments tools (methods, functions and so on) that allows to create your own social network on Subsocial.

![Space-Post-Reaction](../../static/img/entities.png)

In order to have an understanding of the SDK it is not necessary to know the implementation of the substrate based pallets that compose Subsocial. However, understanding the relations between Subsocial entitis can help you build within the SDK.

Subsocial uses the following building blocks to enable social networking:

- Spaces
  - A space is the basic building block for Subsocial, it is where content lives. 
  - [Read More](/docs/develop/getting-started/blockchain-structure/spaces)
- Profiles
  - A profile is nothing more than a space associated with a user, so the process of authentication is easier across multiple dApps.
  - [Read More](/docs/develop/getting-started/blockchain-structure/profiles)
- Posts and Comments
  - Posts and Comments are the building blocks that allow you to store content on Subsocial(whether that is text, audio, an image, or a video).
  - [Read More](/docs/develop/getting-started/blockchain-structure/postsAndComments)
- Reactions
  - Reactions enable the ability of reacting posts and comments, through upvotes and downvotes.
  - [Read More](/docs/develop/getting-started/blockchain-structure/reactions)
- Follows
  - Follows enable users to have a relation with specific profiles and/or spaces, having them in their content feed.
  - [Read More](/docs/develop/getting-started/blockchain-structure/follows)
- Usernames
  - Usernames are crucial for social network dApps because they enable the mapping of human-readable usernames onto account addresses.
  - [Read More](/docs/develop/getting-started/blockchain-structure/usernames)
