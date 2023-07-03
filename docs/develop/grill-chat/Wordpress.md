---
id: wordpress
title: Grill Wordpress Integration
description: Learn how to integrate Grill with Wordpress websites to make them engaging for your users in a few minutes.
keywords: [Wordpress, Grill integration with Wordpress, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

This section covers the step by step process to integrate **Grill** with any **wordpress site** in a few minutes.


## Step 1: Create New Site
Create a new site at `https://wordpress.com` by clicking **"Add New Site"** button:

![Wordpress New Site](/img/wordpress/1.png)

## Step 2: Setup Site
Add the following details for your website:

![Wordpress Setup](/img/wordpress/2.png)

## Step 3: Skip to Dashboard
Head towards the site dashboard:

![Skip to Dashboard](/img/wordpress/3.png)

## Step 4: Choose Plugins from Sidebar
Choose the plugins section from sidebar and hit **"Add New"** button:

![Sidebar Plugin](/img/wordpress/4.png)

![Install New](/img/wordpress/5.png)

## Step 5: Search in the Plugins
Search for **"Headers and Footers"** in the plugin section:

![Search Plugins](/img/wordpress/6.png)

## Step 6: Install the following plugin
Install & activate the plugin for adding our scripts:

![Intall new plygin](/img/wordpress/7.png)

![Activate](/img/wordpress/8.png)

## Step 7: Setup the **Headers and Footer** code plugin
Head towards the installed plugins section, and find it in active section.

![Installed Plygin](/img/wordpress/9.png)

![Active Plugins](/img/wordpress/10.png)

![Setup Plugins](/img/wordpress/11.png)

## Step 8: Add Grill Setup Script
Install Grill Setup script in the plugins, and follow the steps:

![Add new Script](/img/wordpress/12.png)

Update the Script Name as **Grill Setup**:
![Update the title](/img/wordpress/13.png)

Paste the following code, in the **Source Code** section:

```js
  <script src="https://unpkg.com/@subsocial/grill-widget"></script>
  <div class="fixed-div">
    <div id="grill" class="chat"></div>
    <img id="grill-toggle" alt="grill-logo" src="https://sub.id/images/grillchat.svg" />
  </div>
```

![Add the grill setup code](/img/wordpress/14.png)

And hit **Save** button:

![grill setup save](/img/wordpress/15.png)

## Step 9: Add Grill Config Script
Install Grill Config script in the plugins, and follow the steps:

![Add new Script](/img/wordpress/16.png)

Update the Script Name as **Grill Config**:
![Update the title](/img/wordpress/17.png)

Paste the following code, in the **Source Code** section:

```js
  <script>
    // Get the image element and the div element
    const grillLogo = document.getElementById('grill-toggle');
    const grillDiv = document.getElementById('grill');

    // Add a click event listener to the image element
    grillLogo.addEventListener('click', function() {
      // Toggle the 'grill-enabled' class on the div element
      grillDiv.classList.toggle('chat-show');
      
      // Check if the class 'grill-enabled' is present
      if (grillDiv.classList.contains('chat-show')) {
        // initalizing grill.
        const config = {}
        window.GRILL.init(config)
      }
    });
  </script>
```

![Add the grill setup code](/img/wordpress/18.png)

And hit **Save** button:

![grill setup save](/img/wordpress/19.png)

## Step 10: Adding CSS for Styling 
Now, as the last step we need to add the CSS code to style the button and position it correctly:

![Installed Plygin](/img/wordpress/20.png)

Choose **Addtional CSS** button:

![Active Plugins](/img/wordpress/21.png)

Paste the following CSS code:

```css
  .fixed-div {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    text-align: right;
  }

  .fixed-div img {
    width: 60px;
    height: 60px;
    margin-top: 4px;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    background-color: #fff;
    padding: 1px;
  }

  .fixed-div img:hover {
    padding: 0;
  }

  .chat {
    height: min(570px,90vh - 100px);
    width: min(400px,100vw - 60px);
    overflow: hidden;
    border-radius: .625em;
    -webkit-box-shadow: 0 12px 50px -12px rgba(0,0,0,.5);
    box-shadow: 0 12px 50px -12px rgba(0,0,0,.5);
    -webkit-transition-property: opacity,height,width;
    transition-property: opacity,height,width;
    -webkit-transition-duration: .3s,0s,0s;
    transition-duration: .3s,0s,0s;
    -webkit-transition-delay: 0s,0s,0s;
    transition-delay: 0s,0s,0s;
    opacity: 1;
    display: none;
  }

  .chat iframe {
    border-radius: .625em;
  }

  .chat-show{
    display: block;
  }

```

Hit **Save Changes** button:

![Setup Plugins](/img/wordpress/22.png)

## Step 11: Integration Complete, Try Live Now!
We have finished the Setup Successfully.

![Installed Plygin](/img/wordpress/23.png)

You can try out the website here: https://newsnft2.wpcomstaging.com/

![Setup Plugins](/img/wordpress/24.png)

![Setup Plugins](/img/wordpress/25.png)

