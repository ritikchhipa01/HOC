"use client"
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import React from 'react'

const StateProvider = ({ children }) => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StateProvider


