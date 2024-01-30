var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "live_wiK6XvXiiaaWkigPGBlpfIWQm8GcUQoZ231HgSqBokFzek6teWQFhAKHurcR0agm");

var myHeaders2 = new Headers();
// myHeaders2.append("Content-Type", "multipart/form-data");
myHeaders2.append("x-api-key", "live_wiK6XvXiiaaWkigPGBlpfIWQm8GcUQoZ231HgSqBokFzek6teWQFhAKHurcR0agm");



var requestOptions:any = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// var requestOptions2:any = {
//   method: 'POST',
//   headers: myHeaders2,
//   redirect: 'follow'
// };

export const getBreeds = (queryParams:any) => {
  const { breedFilter, imageCount, uploadDataSort } = queryParams;
  const apiUrl = `https://api.thecatapi.com/v1/breeds?limit=${imageCount}&order=${uploadDataSort}`;

  return fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
}

export const getImages = (queryParams:any) => {
  const { breedFilter, imageCount, uploadDataSort, typeImage} = queryParams;
  const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedFilter}&limit=${imageCount}&order=${uploadDataSort}&mime_types=${typeImage}`

  return fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
};

export const getBreedsInfo = (breedId:any) => {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/${breedId}`

  return fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
};


export const getInfoBreedGallery = (queryParams:any) => {
  const {breedName} = queryParams;
  const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedName}`

  return fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
};


export const gatImageCat = () => {
  const apiUrl = `https://api.thecatapi.com/v1/images/search`;

  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export const submitVote = (imageID:any, value:any) => {
  const apiUrl = 'https://api.thecatapi.com/v1/votes';

  const requestOptionsPost = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
    body: JSON.stringify({
      image_id: imageID,
      sub_id: 'optional_unique_user_id',
      value: value,
    }),
  };

  return fetch(apiUrl, requestOptionsPost)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const getVoted = () => {
  const apiUrl = `https://api.thecatapi.com/v1/votes`;

  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}


export const saveFavorites = (imageID:any) => {
  const apiUrl = 'https://api.thecatapi.com/v1/favourites';

  const requestOptionsPost = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
    body: JSON.stringify({
      image_id: imageID,
      sub_id: 'user-007'
    }),
  };
  return fetch(apiUrl, requestOptionsPost)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const getFavorites = () => {
  const apiUrl = `https://api.thecatapi.com/v1/favourites`;

  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export const checkIfInFavoritesApi = (imageId:any) => {
  const apiUrl = `https://api.thecatapi.com/v1/favourites/${imageId}`;

  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => data.length > 0)
    .catch(error => {
      console.log('error', error)
      return false;
    });
}

export const deleteFavorite = (favoriteID:any) => {
  const apiUrl = `https://api.thecatapi.com/v1/favourites/${favoriteID}`;

  const requestOptionsPost = {
    method: 'DELETE',
    headers: myHeaders,
  };

  return fetch(apiUrl, requestOptionsPost)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    
};


export const uploadImage = async (selectedFile:any) => {
  const apiUrl = 'https://api.thecatapi.com/v1/images/upload';
  
  let data = new FormData();
  data.append('file', selectedFile);
  data.append('sub_id', 'my_id_007');
  data.append('breed_id', 'test');

  const requestOptionsPost = {
    method: 'POST',
    headers: myHeaders2,
    redirect: 'follow' as RequestRedirect,
    body:data 
    
  };
  return await fetch(apiUrl, requestOptionsPost)
};
