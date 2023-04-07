// // Import the React and ReactDom libraries
// // why two diffrent libraries? as react itself let the component react with each other and work together but it doesn't render the HTML on browser, RectDom take care of browser rendering and shows the elment on screen
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// // Get hte root div 
// const el = document.getElementById("root"); 
// // Give react control to that root element 
// const root = ReactDOM.createRoot(el)
// // Create component
// function App() {
//     return <h1>hi </h1>
// }
// //  Render that component
// root.render(<App />)
// the above lines are the same but in details
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
