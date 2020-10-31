
const bookmarks = [];
let adding = false;
let error = null;
let errorMessage = '';
let filter = 0;


function findBookmarkById(id) {
   // Takes an id, looks through the array of bookmarks and returns the bookmark with the matching id.
   let foundItem = bookmarks.find(bookmark => bookmark.id === id);
   return foundItem;
}

function createBookmark(bookmark) {
  // Takes data in the shape of an object, and creates a new bookmark with that data and then pushes that new item to the store.
  const newBookmark = {
    isExpanded: false
  };
  bookmarks.push(Object.assign(bookmark, newBookmark));
  console.log('createBookmark function', bookmarks);
}

function toggleIsExpanded(id) {
  let foundItem = findBookmarkById(id);
  foundItem.isExpanded = !foundItem.isExpanded;
}

function deleteBookmark(id) {
  // Takes an id, looks through the array of bookmarks and deletes the bookmark with the matching id.
  let index = bookmarks.findIndex(bookmark => bookmark.id === id);
  console.log(index)
  bookmarks.splice(index, 1);
  console.log(bookmarks)
}

function setError(value) {
  this.error = value;
}

export default {
  bookmarks,
  adding,
  error,
  errorMessage,
  filter,
  setError,
  createBookmark,
  deleteBookmark,
  toggleIsExpanded
};