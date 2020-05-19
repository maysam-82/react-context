// Create context object and export it because we are going to import a context object into a component that is required. Here, we are going to connect the context object to App and Button component and no other component needs to have context object.
import { createContext } from 'react';

// create a default value (english) and pass it into `createContext()`
export default createContext('english');
