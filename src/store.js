const storeData = {
  bookmarks: [],
  adding: false,
  error: null,
  errorMessage: '',
  filter: 0
};

function findBookmarkById(id) {
   let foundItem = storeData.bookmarks.find(bookmark => bookmark.id === id);
   return foundItem;
}

function createBookmark(formData) {
  // Takes data in the shape of an object, and creates a new bookmark with that data and then pushes that new item to the store.
  const newBookmark = {
    isExpanded: false,
    inEditMode: false
  };
  storeData.bookmarks.push(Object.assign(formData, newBookmark));
}

function findAndUpdateBookmark(id, updateData) {
  let parsedData = JSON.parse(updateData);

  let foundItem = findBookmarkById(id);
  let index = storeData.bookmarks.findIndex(bookmark => bookmark.id === id);
  let mergedData = Object.assign(foundItem, parsedData);
  storeData.bookmarks.splice(index, 1, mergedData);
} 

function toggleIsExpanded(id) {
  let foundItem = findBookmarkById(id);
  foundItem.isExpanded = !foundItem.isExpanded;
}

function toggleInEditMode(id) {
  let foundItem = findBookmarkById(id);
  foundItem.inEditMode = !foundItem.inEditMode;
}

function deleteBookmark(id) {
  // Takes an id, looks through the array of bookmarks and deletes the bookmark with the matching id.
  let index = storeData.bookmarks.findIndex(bookmark => bookmark.id === id);
  storeData.bookmarks.splice(index, 1);
}

function setError(value) {
  storeData.error = value;
}

export default {
  storeData,
  setError,
  createBookmark,
  deleteBookmark,
  toggleIsExpanded,
  toggleInEditMode,
  findAndUpdateBookmark
};