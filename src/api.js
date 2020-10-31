import store from "./store";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/loran/bookmarks';

const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then (response => {
      if (!response.ok) {
        error = true;
        store.setError(true);
        return response.json();
      } else {
        store.setError(false);
        return response.json();
      }
      
    })
    .then (data => {
      if (!error) {
        return data;
      }
    });
};

const getBookmarks = function () {
  return listApiFetch(`${BASE_URL}`);
}

const addBookmark = function (bookmarkData) {
  return listApiFetch(`${BASE_URL}`, 
  {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: bookmarkData
  })
}

const deleteBookmark = function (id) {
  return listApiFetch(`${BASE_URL}/${id}`, 
  {
    method: 'DELETE'
  });
}
export default {
  getBookmarks,
  addBookmark,
  deleteBookmark
};