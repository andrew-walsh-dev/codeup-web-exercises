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