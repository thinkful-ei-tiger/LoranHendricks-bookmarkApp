import $ from 'jquery';
import 'normalize.css';
import './index.css';
import bookmarks from './bookmarks';
import api from './api';
import store from './store';



function main() {
  api.getBookmarks()
    .then(bookmarksList => {
      console.log('bookmarks from response', bookmarks);
      for (let i = 0; i < bookmarksList.length; i++) {
        store.createBookmark(bookmarksList[i]);
        console.log('for loop store.bookmarks', store.bookmarks);
      };
      bookmarks.render();
    });
    bookmarks.eventHandlers();
}

$(main);