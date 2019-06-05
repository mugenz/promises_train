import "./styles.css";

const API_URL = "https://starwars.egghead.training/";
const output = document.querySelector('#output');
const loading = document.querySelector('#loading');

loading.innerText = "...Loading";


//const responsePromise = fetch(API_URL + "films");

const apiQuery = (endpoint) => {
  return fetch(API_URL + endpoint).then(response => {
    return response.ok
    ? response.json()
    : Promise.reject(new Error ("Unsuccessfull response"))
  });
}

async function haha() {
  let films = await apiQuery('films');
  console.log(films)
}
haha();

// apiQuery('films').then(films => {
//    return apiQuery("planets").then(planets => {
//     output.innerText = `${films.length} films ${planets.length} planets`
//   })
// })
// .catch(error => {
//   console.log(error)
// })
// .finally(() => {
//   loading.remove();
// })

// responsePromise.then( response => {
//   if (!response.ok) { //if we dont have a succefull http response
//     return Promise.reject(
//       new Error ("Unsuccessfull response") //or throw new Error
//     )
//   }
//   return response.json().then( films => {
//     output.innerText = getFilmTitles(films);
//     })
//   }
// )
// .catch(error => {
//   console.warn(error)
// })
// .finally(() => { //runs on success or fail
//   loading.remove();
// });

// const getFilmTitles = (films) => {
//   return films
//     .sort((a, b) => a.episode_id - b.episode_id)
//     .map(film => `${film.episode_id} - ${film.title}`)
//     .join('\n')
// }