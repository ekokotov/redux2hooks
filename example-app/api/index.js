import Octokit from "@octokit/rest";

const GITHUB_APP_TOKEN = 'test_github_client_token';
const LOAD_EVENTS_PER_PAGE = 10;

class GithubAPI {
  client = null;

  _getAuthToken() {
    return localStorage.getItem(GITHUB_APP_TOKEN);
  }

  logout() {
    return localStorage.removeItem(GITHUB_APP_TOKEN);
  }

  async generateNewAuthToken() {
    const oauthAuthorizations = await this.client.oauthAuthorizations.createAuthorization({
      note: GITHUB_APP_TOKEN + Date.now()
    });

    localStorage.setItem(GITHUB_APP_TOKEN, oauthAuthorizations.data.token);
  }

  async authenticate(userData) { // {username, password}
    const prevSessionToken = this._getAuthToken();

    this.client = new Octokit({
      auth: prevSessionToken || userData
    });

    if (!prevSessionToken) {
      await this.generateNewAuthToken();
    }

    return this.getMe();
  }

  _mapResponse = res => res.data;

  getMe() {
    return this.client.users.getAuthenticated()
      .then(this._mapResponse);
  }

  getRepos() {
    return this.client.repos.list().then(this._mapResponse);
  }

  getFollowers() {
    return this.client.users.listFollowersForAuthenticatedUser().then(this._mapResponse);
  }

  getFeed(username, page) {
    const pagingOptions = {per_page: LOAD_EVENTS_PER_PAGE, page};
    const endpoint = this.client.activity.listReceivedEventsForUser.endpoint.merge({username, ...pagingOptions});

    return this.client.paginate(endpoint, (resp, done) => {
      done(); // stop paging
      return this._mapResponse(resp);
    })
  }
}

export default new GithubAPI();
