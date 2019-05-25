import authReducer from './auth/reducer';
import reposReducer from './repos/reducer';
import followersReducer from './followers/reducer';
import feedReducer from './feed/reducer';
import {combineReducers} from "../../../src";

export default combineReducers({
  auth: authReducer,
  repositories: reposReducer,
  followers: followersReducer,
  feeds: feedReducer
});
