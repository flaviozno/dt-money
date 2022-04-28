import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela papai',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-04-27 09:00:00'),
        },
        {
          id: 2,
          title: 'Imposto',
          type: 'withdraw',
          category: 'Safado',
          amount: 1600,
          createdAt: new Date('2022-04-30 19:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
