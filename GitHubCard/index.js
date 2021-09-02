/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const { default: axios } = require("axios");

const entryPoint = document.querySelector('.cards');

const url = `https://api.github.com/users/BillyBernard`;
axios.get(url)
  .then(resp => {
    console.log(resp.data);
    const card = gitCardMaker(resp.data);
    // document.body.appendChild(card)
    entryPoint.prepend(card); //Append to the div we created cards
  })
  .catch(error => {
    const errorText = document.createElement('p');
    errorText.textContent = "There is an Error!";
    entryPoint.appendChild(errorText);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(user => {
const url = `https://api.github.com/users/${user}`;
axios.get(url)
  .then(resp => {
    console.log(resp.data);
    const card = gitCardMaker(resp.data);
    entryPoint.prepend(card);
  })
  .catch(error => {
    const errorText = document.createElement('p');
    errorText.textContent = "There is an Error!";
    entryPoint.appendChild(errorText);
  });
})







/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardMaker ({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  const cardMain = document.createElement('div');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const realName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p')
  const userLink = document.createElement('a');
  const followerCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');

  cardMain.classList.add('card');

  image.src = `${avatar_url}`;
  cardMain.appendChild(image);

  cardMain.appendChild(info);
  info.classList.add('card-info');

  info.appendChild(realName);
  realName.classList.add('name');
  realName.textContent = `${name}`;

  info.appendChild(userName);
  userName.classList.add('username');
  userName.textContent = `${login}`

  info.appendChild(userLocation);
  userLocation.textContent = `Location: ${location}`;
  info.appendChild(profile);
  profile.textContent = `Profile: ${userLink}`;
  profile.appendChild(userLink);
  userLink.textContent = `${html_url}`
  userLink.href = html_url;

  info.appendChild(followerCount);
  followerCount.textContent = `Followers: ${followers}`;
  info.appendChild(followingCount);
  followingCount.textContent = `Following: ${following}`;
  info.appendChild(userBio);
  userBio.textContent = `About: ${bio}`;
  return cardMain;
 }


  // List of LS Instructors Github username's:
  //   tetondan
  //   dustinmyers
  //   justsml
  //   luishrd
  //   bigknell
