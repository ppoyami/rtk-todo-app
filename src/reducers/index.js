import { combineReducers } from 'redux';
import todosReducer from '@/features/todosSlice';
import filtersReducer from '@/features/filtersSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
