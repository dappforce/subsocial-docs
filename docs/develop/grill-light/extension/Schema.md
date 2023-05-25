---
id: schema
title: Defining The Schema
description: This section explains how to define the schema for an extension for the Grill Light app.  
keywords: [Schema, Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

The schema for an extension explains how the content will be stored on IPFS and parsed to render the React Component inside the chat.

## How are schema structures defined?

Each extension is stored in the following format:

```json
{
  "type": "string",
  "options": {
    // Your schema structure here.
  }
}
```

## Schema for the URL Extension

In the case of the URL extension we need to have two properties in the schema:
- Title: A caption for the URL, for example, LinkedIn, My Portfolio, etc.
- Value: The actual URL

```json
{
  "type": "string",
  "options": {
    "title": "string",
    "value": "string"
  }
}
```

## Defining the schema in Grill Light

Create a new folder named `url` inside the `components/extension` directory.

Each extension needs to have two files:

- FooExtension.tsx
- FooModal.tsx

Where Foo means the name of your extension and in the case of the current example it is **Url**


## Creating the UrlExtension File

Inside the **UrlExtension.tsx** file under `components/extension/url` directory.

```ts
import { Extension, IExtension } from "../types";

export interface UrlExtensionSchema extends Extension {
  type: string;
  options: {
    title: string;
    value: string;
  }
}

```

Now, we need to create a new class called **UrlExtension**, extending the **IExtension** class inside the same file to handle the rendering and computation of the schema data.

Inside **UrlExtension.tsx** file:
```ts

...

export class UrlExtension extends IExtension {
  public schema: UrlExtensionSchema;
  public metadata: any;
  public isPreviewReady: boolean = true;

  // Schema Name to be used in IFPS storage.
  static schemaName: string = "URL"

  constructor(options: any) {
    super();

    const { title, value } = options
    this.schema = {
      type: UrlExtension.schemaName,
      options: { title, value }
    }
  }


  async loadPreview(): Promise<React.ReactNode> {

    // Use this method to call APIs, compute schema data, set object state, etc.
    return this.render()
  }

  render(): React.ReactNode {

    // Write code to render the User Interface for the extension inside chat component.
    return <></>
  }
}

```

## Creating a UI for URLs in the chat

We have to rewrite the render method to display how we want to show the URL, in this case we just simply show the title, and hyperlink it with the actual URL.

> However, you can actually add more features like showing icons for a set of websites like Instagram, Twitter or Polkaverse, or adding link previews like Telegram, or even iFrames.

Inside the **UrlExtension.tsx** update the **render** method:

```ts
  render(): React.ReactNode {
    return <div>
      <Link target="_blank" className="link link-secondary" href={this.schema.options.value}>{this.schema.options.title}</Link>
    </div>
  }
```

Awesome, you are already half way. 

Let's see how to create an input modal next.

