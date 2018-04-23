import { combineReducers } from 'redux';
import PostListReducer from './reducer_postList';
import { reducer as  FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostListReducer,
  form: FormReducer
});

export default rootReducer;
