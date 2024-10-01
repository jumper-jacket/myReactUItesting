const React = window.React;
const ReactDOM = window.ReactDOM;

console.log("test");

function App() {
    return React.createElement('h1', null, 'Hello, world');
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App));

