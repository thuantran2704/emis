import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet';
import App from './App.jsx';
import languageReducer from './slices/languageSlice.js';
import { localeFromPath } from './seo/locales.js';

export function renderPage(pathname) {
  const { language } = localeFromPath(pathname);
  const store = configureStore({
    reducer: { language: languageReducer },
    preloadedState: { language: { language } },
  });
  const markup = renderToString(
    <Provider store={store}>
      <App staticPath={pathname} />
    </Provider>,
  );
  const helmet = Helmet.renderStatic();
  return { markup, helmet };
}
