# SpaceX

This is an application developed using the SpaceX mission data api. An application is developed and design using the React.js, styled-components and deployed over the internet using the netlify cloud deploying service provider.

## Technology Used

- React.js
- HTML
- CSS

## Library Used

- Styled-Componets
- Netlify

## Eproach Used

This section is based on the eproach used while developing an application.

### 1. Fetch API Data

We fetch the data using the function `fetch` which returns the Object which contains an Array that contains the spaceX data in the form of key value pairs.

### 2. Handle the multiple URL

We use the conditional block with the different condition and fetch the URL then use the `useState` Hook provided by the React.js and set the value of the variable we declare and replace it with the API value. We use `useEffect` to rerender the page when we select the different `params` value.

### 3. Manage the Code

We use the `ReactComponent` to make our code clean. This will help us to find out the bugs and resolve them easily.

### 4. Use Styled-Components

This help us to work with the CSS and HTML on the single file. This reduce the time lost while switching between the different screens.

## ScreenShot

<img src=".\src\image\desktop.JPG" alt="home-page">
