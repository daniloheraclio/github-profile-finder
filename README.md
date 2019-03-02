# github-profile-finder

Simple project made with pure javascript which fetch user from github and output details from this user and his last 5 repos.

Used in this project:
ES6 Arrow functions
ES classes
Fetch API async await


OAuth2 key/secret
    https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'

GITHUB API USER - https://developer.github.com/v3/users/
    https://api.github.com/users/:username?client_id=xxxx&client_secret=yyyy

GITHUB API REPOS - https://developer.github.com/v3/repos/#list-user-repositories
    https://api.github.com/users/:username/repos?client_id=xxxx&client_secret=yyyy

Parameters
    type:       string: all, public, private, forks, sources, member: default is all
    sort:       string: created, updated, pushed, full_name: default is created
    direction:  string: asc, desc: default when using full_name is asc, otherwise desc
