function getLatestPush(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': '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'}})
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => json.every((event) => {
            if (event.type === "PushEvent"){
                console.log("The latest push was on " + event.created_at.slice(0,10));
                return false;
            }
        }))
        .catch(error => console.error(error))
}

//run it on my own profile
getLatestPush("andrew-walsh-dev")