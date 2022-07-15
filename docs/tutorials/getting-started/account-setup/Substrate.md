---
id: substrate
title: Substrate
---
## Substrate
Substrate is a framework used to build blockchains. Polkadot and Kusama, and many other chains, are all built using Substrate. 
The technical specifics are not important here, but you can [read about them](https://substrate.io/) if you want to. 
What is important now is to learn how accounts work.

Basically, when you make a Polkadot or Kusama account, or an account for any other Substrate-based blockchain, 
you are actually making a Substrate account. That single Substrate account has accounts on every Substrate-based blockchain. 
So, if you create a Polkadot account, you automatically create accounts for Kusama, Subsocial, Picasso, Zeitgeist, etc.

Additionally, these accounts are all linked together. 
This can best [be seen using Sub.ID](https://sub.id/#/5E7sS6NaRTxPnUqN8W9dfh6nbdNrk5HZ9fiuAcYTdd2sTZbD), 
a tool built by the Subsocial team. We will look at an example account.

***Note:** Substrate addresses have certain prefixes depending on which chain they are for.*

<img src="/img/getting-started-5.png" width="600" />

At the top we can see the base Substrate address, with a prefix of 5. You can think of a Substrate account like a wheel. 
Each individual chain is a spoke on the wheel, and the Substrate address is at the center, connecting them all.

Further down, we can see addresses and balances for a few Substrate-based chains, such as Polkadot, Kusama, Acala, and Astar. 
As you can see, they all have different addresses. However, they are all part of the same Substrate account, 
and the owner of this account only sees one account in his polkadot.js extension, but is able to perform transactions on all of these networks.
