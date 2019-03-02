class GitHub {
  constructor() {
    this.client_id = '9c74828ab143adfa414f';
    this.client_secret = 'f596758b14896a0577f2864a888c6afe388ada0e';
  }

  // Get user method

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile // In ES6 this is the same at profile: profile
    }
  }
}
