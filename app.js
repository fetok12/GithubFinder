//Init Github
const github = new GitHub;
// init Ui
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;
    if(userText !==''){
        // make http call
        github.getUser(userText)
            .then(data => {
               if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
               }else{
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
               }
            });

    } else {
        // clear profile
        ui.clearProfile();
    }
})