let username = prompt("Enter your github username!");
function getGitHubAccount() {
  return new Promise((resolve, reject) => {
    if (username.length > 0) {
      resolve(username);
    } else {
      reject("Nothing Entered");
    }
  });
}

const request = getGitHubAccount();
console.log(request); // pending promise

request.then((user) => {
  console.log("Promise resolved!", user);
  fetch(`https://api.github.com/users/${user}/events/public`)
    .then((response) => response.json())
    .then((userEvents) => {
      console.log(userEvents);
      console.log(
        `Your last commit was on: ${userEvents[0].created_at} for your project ${userEvents[0].repo.name}`
      );
    })
    .catch((error) => console.error(error));
});
request.catch((message) => console.log("Promise rejected!", message));

let waitTime = prompt("How long would you like to wait for, in milliseconds?");

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 0) {
        resolve(time);
      } else {
        reject("No time entered");
      }
    }, time);
  });
}

const request2 = wait(waitTime);
console.log(request2); // pending promise
request2.then((message) =>
  console.log(`You waited for ${message} milliseconds!`)
);
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request2.catch((message) => console.log("Promise rejected!", message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"
