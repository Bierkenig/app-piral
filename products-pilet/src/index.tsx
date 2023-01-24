import * as React from 'react';
import type { PiletApi } from 'app-piral';

const productPage = require('./productPage')

export function setup(app: PiletApi) {
  app.registerPage('/', productPage);
}
