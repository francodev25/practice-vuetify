function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => json)
}

export{
    getUsers
}