function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then((data) => {
      return data; 
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired.');
  fetchBooks();
});
