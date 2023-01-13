---
id: creating-project
title: Creating New Project
displayed_sidebar: developSidebar
---

Let's use [Subsocial Starter](/docs/develop/developer-quickstart) to create a new project named **twitter-dapp**

:::info Note
Make sure you have [node](https://nodejs.org), npm and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed before going forward.
:::

### Follow the steps 

1. Open terminal inside a directory of your choice.

2. Run the following command: 
  ```ts
  npx create-react-app twitter-dapp --template @subsocial/starter
  ```
3. Change the directory and install all the dependencies, using this command:
  ```ts
  cd twitter-dapp && yarn
  ```
4. To run the project, execute the following command:
  ```ts
  yarn start
  ```
  You will see something like this: 

  ![Starter Demo](../../../../static/img/subsocial-starter.png)

5. Open the `twitter-dapp` directory in [VS Code](https://code.visualstudio.com).

