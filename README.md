# React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - wriitn in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# FoodSpace

/\*
\*\* Header

- - Logo
- - Nav Items
    \*\* Body
- - Search
- - Restaurant Container
- - Restaurant Card
-         - Img
-         - Name of Restaurant, Star Rating, cuisine, Delivery time
  \*\* Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

Two Types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Named Export/Import
  export const Component;
  import {Component} from "path";

# React Hooks

(Normal JS utility functions)

Two Important React Hooks used most of the time:

- useState() = This is used to generate superpowerful state variable in react
- useEffect()

# Two Types of Routing in Web Applications

- Server Side Routing
- Client Side Routing

# Redux Toolkit

- Install @reduxjs/tooklit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

# Types of Testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing in our application

- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react -To make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom
