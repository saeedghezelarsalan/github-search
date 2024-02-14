import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {initialize} from './store/store.ts'
import {BrowserRouter} from "react-router-dom";

const store = initialize();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/test">
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)