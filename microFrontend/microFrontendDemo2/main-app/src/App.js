import React from 'react';

function App(props) {

  const { content, loading } = props;
  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  return (
    <>
      <header>
        <nav>
          <ol>
            <li><span onClick={() => goto('index', '/')}>index</span></li>
            <li><span onClick={() => goto('reactmicroapp1', '/reactmicroapp1')}>react-micro-app1</span></li>
            <li><span onClick={() => goto('reactmicroapp2', '/reactmicroapp2')}>react-micro-app2</span></li>
            <li><span onClick={() => goto('reactmicroapp3', '/reactmicroapp3')}>react-micro-app3</span></li>
          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default App;
