const myFirstComponent = function() {
  return React.createElement('div', null, React.createElement('h1', null, 'This is my first component...'));
};

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));
