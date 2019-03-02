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
