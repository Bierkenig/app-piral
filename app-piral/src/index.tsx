import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { layout, errors } from './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = '';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      '/': home,
    },
  },
  plugins: [...createStandardApi()],
  /*requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },*/
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
