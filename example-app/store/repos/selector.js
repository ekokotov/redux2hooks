import { createSelector } from 'reselect'

export const reposCountSelector = createSelector(
  state => state.repositories.items,
  repos => repos.length
);
