import * as React from 'react';
import type { PiletApi } from 'app-piral';

const startPage = require('./StartPage')

export function setup(app: PiletApi) {
  app.registerPage('/', startPage);
}
