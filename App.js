import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import navigation from './app/src/components/reducer'

import { JunhoApp } from './app/src/components/navigation';

const reducer = combineReducers({ navigation })
const store = createStore(reducer, applyMiddleware(logger))

export default class Junho extends Component {
    render () {
        return (
            <Provider store={store}>
                <JunhoApp />
            </Provider>
        )
    }
}