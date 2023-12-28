---
id: styling
title: Setup Styling
displayed_sidebar: developSidebar
---

We need to add [tailwind](https://tailwindcss.com/docs/guides/create-react-app) css support for creating the UI elements & styling.

Follow these steps:

1. Run the following commands:

   ```ts
    yarn add -D tailwindcss postcss postcss-cli autoprefixer
   ```  

   ```ts
    yarn tailwindcss init tailwind.js --full
   ```

2. Create a new file called **postcss.config.js** in the **root** directory.

  ```ts
  const tailwindcss = require('tailwindcss');
  module.exports = {
      plugins: [
          tailwindcss('./tailwind.js'),
          require('autoprefixer')
      ],
  };
  ```

3. Edit the **tailwind.js** file by adding a new property called **extend**:

  ```tsx
    module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [],
    darkMode: 'media', // or 'class'
    theme: {
      extend: {
        colors: {
          pinkish: "rgb(224, 36, 94)",
          primary: "rgb(29, 161, 242)",
          "primary-hover": "rgb(26, 145, 218)",
          dark: "rgb(21, 32, 43)",
          "dark-lighter": "rgb(25, 39, 52)",
          "dark-hover": "rgb(22, 45, 64)",
        },
        opacity: {
          0: 0,
          15: "0.15",
          25: "0.25",
          50: "0.50",
          75: "0.75",
          100: "100",
        },
        borderRadius: {
          none: "0",
          sm: "0.125rem",
          default: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          full: "9999px",
          xl: "1rem",
        },
      },
      // ... keep the other fields as it is
    };
  ```

4. Create a new file named **index.css** inside the **src** directory, and paste the following code:  

  ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      background-color: rgb(21, 32, 43);
    }
  ```

5. Update the following scripts in package.json:

  ```ts
    "scripts": {
      "start": "yarn watch:css && react-scripts start",
      "build": "yarn build:css && react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "build:css": "postcss src/index.css -o src/assets/main.css",
      "watch:css": "postcss src/index.css -o src/assets/main.css"
    } 
  ```

6. Add the import statement inside the **index.ts** file like this:

  ```ts
    import './assets/main.css';
  ```

7. [Download](https://drive.google.com/drive/folders/1l6t06P1aJqTCM7vi5rU6qIhwxeHc3_WR?usp=sharing) the `svgs`, and save the directory inside `src` folder.
