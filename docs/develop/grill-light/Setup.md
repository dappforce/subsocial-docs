---
id: setup
title: Setting Up Grill Locally
description: A quick guide to run the Grill Light app locally on your machine in seconds.
keywords: [Extensions, Grill Light, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

This section covers the steps for setting up Grill locally, and the environment variables that need to be added.

## Local development environment setup

- Fork the [Grill Light app](https://github.com/dappforce/grillchat-light-ui) on your GitHub
- Clone the repository locally
- Rename `.env.example` file to `.env` 
- Run `yarn && yarn dev` to run the project locally

## Understanding environment variables 

| Name | Description   | Required? |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| SERVER_MNEMONIC  | The wallet mnemonic of the server, in order to automatically send users [Energy](https://docs.subsocial.network/docs/basics/lightpaper/architecture/energy) | Yes |
| CAPTCHA_SECRET   | ReCaptcha secret, read [here](https://developers.google.com/recaptcha/intro) for more information.  | Yes |
| NEXT_PUBLIC_CAPTCHA_SITE_KEY | ReCaptcha sitekey | Yes |
| NEXT_PUBLIC_MORALIS_API_KEY | API key to fetch NFT metadata from Moralis. Get your own API key [here](https://moralis.io/api/nft/).  | No |


> NOTE: We have already created an example environment file for you for local development. You can rename the file and run the app locally. 
