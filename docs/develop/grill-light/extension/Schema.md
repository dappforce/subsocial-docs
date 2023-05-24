---
id: schema
title: Defining the Schema
description: This section explains how to define the schema for an extension for Grill Light App.  
keywords: [Schema, Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Schema for an extension explains how the content will be stored on IPFS and parsed to render the React Component inside the chat.

## How schema structures are defined?

Each extension is stored in the following format:

```json
{
  "type": "string",
  "options": {
    // Your schema structure here.
  }
}
```

## Schema for Url Extension

In the case of Url extension we need to have 2 properties in the schema:
- Title: Represting a caption for the Url, example: LinkedIn, My Portfolio, etc.
- Value: Represting the actual url

```json
{
  "type": "string",
  "options": {
    "title": "string",
    "value": "string"
  }
}
```

## Defining the schema in the Grill light

Create a new folder with `url` as name inside the `components/extension` directory.

Each extension needs to have 2 files:

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

Now, we need to create a new class called **UrlExtension** extending the **IExtension** class inside the same file to handle rendering and computation on the schema data.

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

## Creating UI for URL in Chat

We have to rewrite the render method to display how we want to show the URL, in this case we just simple show the title and hyperlink it with the actual url.

> But you can actually add more features like showing icons for a set of websites like instagram, twitter or polkaverse or adding link previews like telegram, or even iFrames.

Inside the **UrlExtension.tsx** update the **render** method:

```ts
  render(): React.ReactNode {
    return <div>
      <Link target="_blank" className="link link-secondary" href={this.schema.options.value}>{this.schema.options.title}</Link>
    </div>
  }
```

Awesome, you have are already half way. 

Let's see how to create an input modal next.

