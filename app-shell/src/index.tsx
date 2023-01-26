import * as React from 'react';
import { render } from 'react-dom';
import { createPiral, Piral, SetRedirect } from 'piral';
import { createContainersApi } from 'piral-containers';

const feedUrl = 'http://localhost:3000/api/v1/pilet';

const piral = createPiral({
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
  plugins: [createContainersApi()],
});

const app = (
  // @ts-ignore
  <Piral instance={piral}>
    <SetRedirect from="/" to="/products" />
  </Piral>
);

render(app, document.querySelector('#app'));
