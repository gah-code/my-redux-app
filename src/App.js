import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';

function App() {
  return (
    <Fragment>
      <Counter />
      <Auth />
    </Fragment>
  );
}

export default App;
