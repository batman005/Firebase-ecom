import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorkerRegistration';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>
    <BrowserRouter>
    <Elements stripe={stripePromise}>
      {/* <UserProvider> */}
        {/* <CategoriesProvider>
          <CartProvider> */}
           <App />
          {/* </CartProvider>
        </CategoriesProvider> */}
      {/* </UserProvider> */}
      </Elements>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);


serviceWorker.register();