import React from 'react';
import ReactDOM from 'react-dom';

const PageTitle = (props) => {
  const style = { color: props.color };

  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const myFirstComponent = () => (
    <div className="my-first-component">
      <PageTitle title="Game of thrones" color="YellowGreen" />
      <PageTitle title="Stranger Things" color="Red" />
    </div>
  )

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));
