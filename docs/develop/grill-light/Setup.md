---
id: setup
title: Setting up Grill Locally
description: A quick guide to run grill light app locally on your machine in seconds.
keywords: [Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

This section covers Grill local setup steps and the environment variables need to be added.

## Local development environment setup

- Fork the [Grill Light App](https://github.com/dappforce/grillchat-light-ui) on your GitHub
- And clone the repository locally
- Rename `.env.example` file to `.env` 
- Run `yarn && yarn dev` to run the project locally

## Understanding environment variables 

| Name | Description   | Required? |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| SERVER_MNEMONIC  | Wallet mnemonic of the server, in order to send automatically users [Energy](https://docs.subsocial.network/docs/basics/lightpaper/architecture/energy) | Yes |
| CAPTCHA_SECRET   | ReCaptcha secret, read [here](https://developers.google.com/recaptcha/intro) for more information.  | Yes |
| NEXT_PUBLIC_CAPTCHA_SITE_KEY | ReCaptcha sitekey | Yes |
| NEXT_PUBLIC_MORALIS_API_KEY | API key to fetch NFT metadata from Moralis. Get your own API key [here](https://moralis.io/api/nft/).  | No |


> NOTE: We have created an example environment file for you already for local development. You can rename the file and run the app locally. 