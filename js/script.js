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
        <a href="${data.html_url}" target="_blank" class="github-link">
            <img src="asset/github.png" alt="github logo" class="github-logo"/>    
        </a>`;
    gitapi.innerHTML = userInfo;
})


