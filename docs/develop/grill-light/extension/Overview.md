---
id: overview
title: Overview
description: Building a new extension on Grill app step-by-step guide.
keywords: [Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

In this section, we will cover on how to create a new extension on top of Grill light app.

We will be building a new extension for URLs on top of Grill Light app.

## Components of an Extension

Each extension should have:
- A very specific usecase / purpose, for example: sending NFTs or image from IPFS / URL, etc. 
- A new JSON schema to be used in IPFS extending the **IExtension** class.
- A utility class for serializing / de-serializing json and implementing the preview renderer.
- An input modal for the asking data from users.

## Building URL Extension

In this section, we will write an extension for attaching URLs with a chat message. These URLs extension powers the usecase of sharing external endpoints for sharing information like maybe original source, video link, portfolio website, etc.

Here's how it will look like in chat:
![URL Message](/img/extension/url-message.png)

