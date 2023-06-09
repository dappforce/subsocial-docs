---
id: signer
title: Off-Chain Signer
displayed_sidebar: homeSidebar
---

The Off-Chain Signer provides the ability to use Subsocial applications without a wallet, or without constant transaction 
confirmations if you do use a wallet.

The Signer technology leverages proxies accounts, a feature of Substrate, 
to allow applications to sign a select set of social transactions on behalf of users. 
Note that this does not include important transactions such as transferring spaces or tokens, or managing roles. 
This removes the need to constantly confirm transactions every time you like a post, and allows users to get started with just an email and password.

For those using an email and password, an account is generated and the private key is stored in their browser. We are investigating possible solutions 
such as Web3Auth to further improve this.

For more details on the Off-Chain signer, 
please read [this article](https://polkaverse.com/@subsocial/leveraging-polkadot-s-unique-capabilities-to-enable-web2-ux-38336).
