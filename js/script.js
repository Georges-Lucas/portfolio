const url = "https://api.github.com/users/Georges-Lucas";

const gitapi = document.querySelector('span');

fetch(url) 
.then(response => response.json())
.then(data =>{
    const userInfo = `
        <img src="${data.avatar_url}" alt="logo">
        <p>
            ${data.login}
        </p>
       <!-- <p>
            ${data.ville}
        </p>-->
        <p>
            ${data.url}
        </p>`;
    gitapi.innerHTML = userInfo;
})


