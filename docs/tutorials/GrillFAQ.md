---
id: grill-faq
title: Grill.chat FAQ
---

## What is Grill.chat?
[Grill.chat](https://grill.chat/) is a mobile-friendly, anonymous chat application powered by Subsocial, allowing anyone to communicate on-chain, 
without needing a wallet or tokens!

## How does it work?
Grill.chat currently makes use of the Subsocial and Crust blockchain networks to handle social and storage, respectively. 
Message contents are pinned to IPFS via Crust, and the IPFS CID (Content ID) is stored on the Subsocial blockchain, 
where users can send or reply to messages. 

On the back-end, Grill Hubs are Spaces on Subsocial, and individual chat rooms are posts, 
with the chat messages being comments on that post. However, due to the UI design, it just looks like a normal chat room.

## Is Grill.chat decentralized?
At the time of writing, Grill.chat runs on xSocial, a centralized standalone Substrate chain with low block times, enabling a smoother UX. 
In the future, it will be migrated to the decentralized Subsocial mainnet.

Additionally, the Grill.chat application is centralized, 
but anyone can fork our [open sourced code](https://github.com/dappforce/grillchat).

## Why don't I need a wallet or tokens?
[Grill.chat](https://grill.chat/) makes use of Subsocial's innovative UX (user experience) solutions to enable a smooth Web2-like experience. 
The app will automatically create an account for you as soon as you send your first message, and store the private key in your browser, 
allowing it to sign and pay for your transactions for you, meaning you don't need a wallet or tokens, and there are no transaction confirmation pop-ups!

## Does Grill.chat have moderation?
Yes, chat owners can hide messages or ban accounts from that chat entirely. Do note that this is just moderation, not censorship, 
and will only apply on Grill.chat; the moderated messages will still appear on-chain.

Chat owners can moderate messages by right clicking (or taping, if on mobile) on the message and selecting Moderate, 
where you can hide that message, or ban the sender.

## Can I link my identity?
Yes, [Grill.chat](https://grill.chat/) currently supports ENS (Ethereum Naming Service) identities if you link your EVM account that owns an ENS, 
and will support more types in the future, such as Subsocial Usernames.

## How do I link my EVM account?
Here is a [tutorial](https://scribehow.com/page/Grillchat_Linking_Your_EVM_Account_and_Enabling_Notifications__1D28T58sR6yoMO1q4aWODw) on how to link your EVM account.

## How do I enable notifications?
Grill.chat currently has push notifications in the browser, and a Telegram bot notification service, 
though more options will be enabled in the future. Notifications can be enabled by logging in and clicking the user icon in the top right corner, and selecting Notifications.

Here is a more in-depth [tutorial](https://scribehow.com/page/Grillchat_Linking_Your_EVM_Account_and_Enabling_Notifications__1D28T58sR6yoMO1q4aWODw) on how to enable the Telegram bot.

## How do I donate to someone?
In order to donate to someone, they must have an EVM account linked to their Grill account.

Simply right click (or tap, if on mobile) on their message, and select Donate.

## Can I log in to another device with the same Grill account?
Yes, via two methods.

Click on your avatar in the top right corner of the application to open the menu. Next, you have two options:

- Click the "Share session" button and scan the QR code on your other device, or enter the URL, and you will be logged in to the same account.

- Click on "Show Grill secret key" and copy that, and on your other device, hit "Login" then "Enter Grill secret key" and paste it there,
and you will be logged in to the same account.

## Is Grill.chat open and transparent?
Yes. [Grill.chat](https://grill.chat/) uses DappForce's OpenComm technology (built on Subsocial), meaning all of the data is open and accessible, 
allowing any application to read and display it. This means that other developers can build their own user interfaces, 
which will still show the same discussions as you can see on Grill.chat, allowing users to pick which UI they like more, without missing out on anything!

## Can I build on Grill.chat?
Yes, building [extensions](https://docs.subsocial.network/docs/develop/grill-chat/extensions/) for Grill.chat is easy, 
allowing you to add extra functionality. 
You can join our [developer chat](https://t.me/+oUpF3nTHlCkwNzA6) if you have any questions or want to get in touch with us.

## How can I integrate Grill.chat into my website?
Here is a short [tutorial](https://docs.subsocial.network/docs/develop/grill-chat/integration/) on how to 
integrate Grill.chat using our easy-to-install plugin. Multiple other applications already have Grill.chat integrated, 
and in the future we will build more ways to integrate Grill natively into webpages. 
You can join our [developer chat](https://t.me/+oUpF3nTHlCkwNzA6) if you have any questions or want to get in touch with us.
