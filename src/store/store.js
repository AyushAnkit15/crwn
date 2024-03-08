import {compose , applyMiddleware} from 'redux'
import { legacy_createStore as createStore} from 'redux'

import { rootReducer } from './root-reducer'

import logger from 'redux-logger'

const store = createStore(rootReducer , compose(applyMiddleware(logger)))
export default store ;
