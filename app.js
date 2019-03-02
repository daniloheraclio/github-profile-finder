// Init Github
const github = new GitHub;
// Init UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
   const userText = e.target.value;

   if(userText !== ''){
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show Alert
          ui.showAlert('User not found! Try again.', 'alert alert-danger')
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
      .catch()
   } else {
     // Clear Profile
     ui.clearProfile();
   }
})
