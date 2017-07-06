import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';

const LoadableExample = Loadable({
  loader: () => fakeDelay(2000).then(() => import('./Example')),
  loading: Loading
});

export default function App() {
  return (
    <div>
      <h1>React Loadable Demo</h1>
      <LoadableExample/>
    </div>
  );
}
