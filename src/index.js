import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <CategoriesProvider>
          <CartProvider> */}
           <App />
          {/* </CartProvider>
        </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
