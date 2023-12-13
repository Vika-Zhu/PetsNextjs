var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "live_wiK6XvXiiaaWkigPGBlpfIWQm8GcUQoZ231HgSqBokFzek6teWQFhAKHurcR0agm");

var requestOptions:any = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


export const getBreeds = () => fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));

export const getImages = () => {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=20", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};