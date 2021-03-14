import './App.css';

function App(props) {
  const { content } = props
  return (
    <div className="App">
      demo1
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;
