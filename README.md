# redux2hooks
Small library for a smooth replacement of Redux/Thunk for React 16 hooks using Redux-like syntax.
## Introduction

This is a Redux/Thunk-like bindings library for working with Hooks API.
You can start to migrate your Redux application to React 16 Hooks. 
I tried to keep the syntax closest to [Redux](https://github.com/reduxjs/redux) and [Redux-thunk](https://github.com/reduxjs/redux-thunk) for async actions.
You can use class components or functional components wrapped into `connect` or functional components with `React.useContext`
Works fine with such libs like `react-router-dom` or `reselect`;
## Install

```bash
# Yarn
yarn add redux2hooks

# NPM
npm install --save redux2hooks
```
## Example
I've migrated test project from redux to hooks. It's simple github application with 2 pages: login and dashboard, where you can fetch all information about your github user. 
You can check [redux version](https://github.com/ekokotov/redux-hooks-github-app/tree/master/src/redux) as well.
To run the example project locally:

```bash
# In the terminal, run `yarn start` or `npm i` in the root to rebuild the library itself
npm run dev
# open localhost:8080 and check the app
```

## API:
- [connect](#connect) - `react-redux`-like HOC to connect your component to store
- [StoreProvider](#storeprovider) - application wrapper based on Context APi
- [combineReducers](#combineReducers) - to merge your store reducers into single one.
- [useContext(Store)](#store) - hook to inject new Store.

##How to init store
1. Combine your Reducers using `combineReducers`
2. Wrap your app into StoreProvider and pass reducers as a prop
3. Connect your component to store using `connect` or use `React.useContext`

### Actions:
```javascript
const startLogin = userData => ({type: LOGIN_START, payload:userData})
```
### Async Actions:

```javascript
const login = userData => async dispatch => {
  dispatch({type: LOGIN_START});
  try {
    const user = await API.authenticate(userData);
    dispatch({type: LOGIN_SUCCESS, payload: {user}});
  } catch (errors) {
    dispatch({type: LOGIN_FAILED, payload: {error: errors.message}});
  } finally {
      dispatch({type: LOGIN_END});
  }
};
```
## Connect
```tsx
function connect(mapStateToProps?, mapDispatchToProps?);
```
### Usage in functional style:
```tsx
...
import {connect} from "redux2hooks";
import {loadFollowers} from '../actions';

function Followers(props) {
  useEffect(() => {
    props.loadFollowers()
  }, []);

  return (
   ... (using props.followers or props.inProgress)
  );
}

export default connect(
  state => ({
    followers: state.followers.items,
    inProgress: state.followers.inProgress
  }),
  {loadFollowers}
)(Followers);
```
### Usage for class component:
```tsx
...
import {connect} from "redux2hooks";
import {loadRepositories as load} from '../../store/repos/actions';
import {reposCountSelector} from "../../store/repos/selector";

class Repositories extends Component {
  componentDidMount() {
    this.props.loadRepositories();
  }

  render() {
    return (
      ...
    );
  }
}

export default connect(
  state => ({
    repos: state.repositories.items,
    reposCount: reposCountSelector(state),
    inProgress: state.repositories.inProgress
  }),
  {loadRepositories: load}
)(Repositories);
```
## StoreProvider
```tsx
...
import {StoreProvider} from 'redux2hooks';
import reducers from './store/reducer';

render(
  <StoreProvider reducers={reducers}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </StoreProvider>, document.getElementById('root'));
```
## combineReducers
Simple replacement of `react-redux` Provider
```tsx
...
import {combineReducers} from "redux2hooks";

export default combineReducers({
  auth: authReducer,
  repositories: reposReducer,
  ...
});
```
## Store
BTW it's easy start to write your components in new fancy way:

```tsx
...
import {Store} from "redux2hooks";
import {loadFeed, loadNextPage} from "../../store/feed/actions";

function Feed() {
  const {state, dispatch} = useContext(Store);

  useEffect(() => {
    dispatch(loadFeed());
  }, [state.feeds.page]);

  return (
    ...
  );
}
```
