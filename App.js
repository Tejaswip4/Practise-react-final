import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement('h1', {}, "I am an h1 tag")));

const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(parent);

