---
id: registry
title: Adding An Extension To The Registry
description: This section explains how to link a newly created extension to Light Grill's extension registry.
keywords: [Registry, Extensions, Light Grill, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Every extension that is created needs to be added to the registry to ensure it is listed on the Grill Extension Selector.

## Creating An Extension

We need to extend the **Extension** interface to create values for the extension related details like Modal, Extension and Schema Name.

You need to create the **index.tsx** file inside the **components/Extensions/url** directory.

```ts
import { Extension } from "../types"
import { UrlExtension, UrlProperties } from "./UrlExtension"
import UrlModal from "./UrlModal"

const url: Extension<UrlExtension> = {
  name: UrlExtension.id,
  initialize: (properties: UrlProperties) => new UrlExtension(properties),
  label: "URL",
  modal: <UrlModal />,
}

export default url


```

Now, the last step is to add the **url** to the list of extensions in the `registry.tsx` file:

```ts

  import url from "@/components/Extensions/url";

  export const registry: Extension<any>[] = [
    image,
    nft,
    url // url is added here.
  ]

```

## Wohooo 🎊

You have successfully built your first extension on top of Light Grill!

Now keep building for more interesting use cases, and ask any questions [here](hhttps://t.me/+0bn2xWmRXdpmM2Y6).
