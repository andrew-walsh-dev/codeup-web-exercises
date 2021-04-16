const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let wizards = users.filter(user => user.languages.length >= 3);
console.log(wizards);

let emails = users.map(user => user.email);
console.log(emails);

let totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience}, 0)
console.log(totalExperience);

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest){
        return user.email.length;
    }
    return longest;
}, 0)
console.log(longestEmail);

let i = 0;
let userString = users.reduce((str, user, index, array) => {
    if (index == array.length - 1){
        str +=  "and " + user.name;
    }
    else{
        str += user.name + ", ";
    }
    return str;
}, "Your instructors' names are: ")
console.log(userString);

let uniqueLangs = users.reduce((arr, user) => {
    user.languages.map(language => {
        if (!arr.includes(language)){
            arr.push(language);
        }
    })
    return arr;
}, []);
console.log(uniqueLangs);



