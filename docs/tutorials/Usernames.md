---
id: usernames
title: Subsocial Usernames
---

### What are Subsocial usernames?
Subsocial usernames allow you to map a human-readable name to your Substrate account.

### What can I use Subsocial usernames for?
Subsocial usernames allow for recognizability and ease of use.

Simply compare **decentralized.sub** to **3pgFnoLz67beo6BBoMux2fxUQLFCbYAQxkQZqiobYNWjFfZV**. 
Which is easier to remember and share?

Subsocial usernames will be useable in any project that supports them, 
such as dapps built on Subsocial, wallets, and governance platforms.

Grill also supports Subsocial usernames, allowing you to set a username for your spaces. 
This makes the URL of your space more human friendly, such as https://grillapp.net/@subsocial.

Sub.ID supports Subsocial usernames as well. If Alice buys **alice.sub**, 
then we can simply navigate to **sub.id/alice** to be taken to Alice's **Sub.ID** page.

Imagine creating a username once, and being able to use it on every app.

### How do Subsocial usernames work?
Usernames are stored on the Subsocial blockchain, creating a link between the username and the account that owns it.
This allows applications such as Grill to easily access this, 
allowing usernames to be used in place of long account addresses.

### Will there be a minimum length for usernames?
Yes. The minimum length for usernames is 4 characters, up to a maximum of 63 characters. 
At the moment, there are no plans for usernames with 1-3 characters.

### How do I register a username?
You can register a username on [the registration page](https://grillapp.net/dd).

Registering a username will require you to lock 10 SUB, as well as pay a fee depending on the length of the username.

| Username Length | Cost |
|--|--|
| 4 Characters | 10,000 SUB |
| 5 Characters | 2,000 SUB |
| 6 Characters | 400 SUB |
| 7+ Characters | 100 SUB |

### What if I don't have SUB tokens?
You can also register a username with DOT, using a service created by our team. 
Our team will supply the 10 SUB required to be locked, and the payment for the Username, 
ensuring you don’t need to go through any hassle to get started. The DOT will be sent to our team’s Service Account, 
and this service will register your chosen Username to your account. 
In the back-end, this service will be making the SUB payment in order to register your username for you.

| Username Length | Cost |
|--|--|
| 4 Characters | 100 DOT |
| 5 Characters | 20 DOT |
| 6 Characters | 4 DOT |
| 7+ Characters | 1 DOT |

### Will my usernames expire?
No. However, expirations may be added in the future.

### Can I register a username for someone else?
Yes, when registering a username you can choose the registering account, or any other account, as the new owner.

### How many usernames can I register?
Each account can register up to 100 usernames for themselves, but you can register an infinite amount of usernames for other people.

### Can I unregister a username?
No, at the moment, **all SUB locked to register usernames will remain locked forever**. 
However, the ability to unregister usernames may be added in the future.

If you transfer a username, your locked SUB will be moved to the recipient account and locked there.

### How do I transfer a username to another account?
While there is not yet an official UI for transfering usernames, it can be done through 
the [Polkadot.js apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsubsocial-rpc.dwellir.com#/extrinsics) page.

In the first section, select the account that currently owns the username that you want to transfer.

Next, select the "ownership" pallet and the "transferOwnership" extrinsic.

![](../../static/img/domaintransfer1.png)

Set the entity to "Domain" (Usernames are known as Domains on the blockchain) and enter the full username below.

Finally, enter the address of the account to transfer the username to.

Submit and sign the transaction.

![](../../static/img/domaintransfer2.png)

The recipient will need to accept the transfer in a similar manner, selecting the account that the username was transferred to, and the "ownership" pallet, 
but now using the "acceptPendingOwnership" extrinsic. Again, set the entity to "Domain" and enter the full username, 
and then sign and submit the transaction.

![](../../static/img/domaintransfer3.png)

If you do not want to accept a transfer, you can instead use the "rejectPendingOwnership" extrinsic, which will send the username back to the original owner.

![](../../static/img/domaintransfer4.png)

### Can I buy and sell usernames?
At the moment there is no marketplace for trading usernames.
