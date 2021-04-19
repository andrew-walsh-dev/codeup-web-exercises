function getLatestPush(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': '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'}})
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => {
            let lastPushDate = json.filter(event => event.type === "PushEvent")[0].created_at.slice(0,10);
            console.log("Last push was on " + lastPushDate);
        })
        .catch(error => console.error(error))
}

//run it on my own profile
getLatestPush("andrew-walsh-dev")

function wait(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), milliseconds);
    });
}

wait(1000).then(() => console.log("You will see this in 1 second."))
wait(5000).then(() => console.log("You will see this in 5 seconds."))