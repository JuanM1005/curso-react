import type FormData from './Form.types';

export const Form = ({ children, onSubmit }: FormData) => {
  return (
    <form onSubmit={onSubmit}>
      {/* Inputs */}
      {children}
    </form>
  );
};
