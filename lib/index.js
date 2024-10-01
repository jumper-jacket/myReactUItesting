"use strict";

var React = window.React;
var ReactDOM = window.ReactDOM;
console.log("test");
function App() {
  return React.createElement('h1', null, 'Hello, world');
}
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App));