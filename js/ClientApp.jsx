import React from 'react';
import ReactDOM from 'react-dom';

const myFirstComponent = () => React.createElement('div', null, React.createElement('h1', null, 'This is mmy first component...'));

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));
