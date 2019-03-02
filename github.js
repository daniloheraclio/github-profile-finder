class GitHub {
  constructor() {
    this.client_id = '9c74828ab143adfa414f';
    this.client_secret = 'f596758b14896a0577f2864a888c6afe388ada0e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    this.direction = 'direction: asc'
  }

  // Get user method

  async getUser(user){
    // fetch profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // fetch repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile, // In ES6 this is the same at profile: profile
      repos
    }
  }
}

/* 
>>  OAuth2 key/secret
    https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'

>>  GITHUB API USER - https://developer.github.com/v3/users/
    https://api.github.com/users/:username?client_id=xxxx&client_secret=yyyy

>>  GITHUB API REPOS - https://developer.github.com/v3/repos/#list-user-repositories
    https://api.github.com/users/:username/repos?client_id=xxxx&client_secret=yyyy

    Parameters
    type:       string: all, public, private, forks, sources, member: default is all
    sort:       string: created, updated, pushed, full_name: default is created
    direction:  string: asc, desc: default when using full_name is asc, otherwise desc

*/
