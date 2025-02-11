/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('App is ready to work offline.');
    },
    registered () {
      console.log('PWA has been registered.');
    },
    cached () {
      console.log('Content has been cached for offline use.');
    },
    updatefound () {
      console.log('New update is downloading.');
    },
    updated () {
      console.log('New content is available. Refresh to update.');
    },
    offline () {
      console.log('No internet, but still works offline!');
    },
    error (error) {
      console.error('Service Worker registration failed:', error);
    }
  })
}
