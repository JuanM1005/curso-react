import { Button, Form } from './components';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Form onSubmit={handleClick}>
        <Button label="Click me!"/>
      </Form>
    </>
  );
};

export default App;
