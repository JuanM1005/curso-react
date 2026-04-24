import { Button } from './components';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Button label="Click me!" onClick={handleClick}></Button>
    </>
  );
};

export default App;
