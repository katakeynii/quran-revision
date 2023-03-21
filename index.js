/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
const Container = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Container);
