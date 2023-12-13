import fetchUser from "./githubApi";

(async ()=>{
    const userData = await fetchUser('ziyadu7')
    console.log(userData);
    document.querySelector('h1').innerHTML = JSON.stringify(userData)
})()