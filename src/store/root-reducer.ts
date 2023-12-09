// root-reducer.ts
import { combineReducers } from 'redux';
import searchReducer from './search/search-reducer.ts'; // Assuming you have an authReducer

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>;
