let ulRoot = document.querySelector('.todos');
let input = document.querySelector('input[type="text"]');

let allMovies = [
  {
    name: 'Forest Gump',
    watched: false,
  },
  {
    name: 'Inception',
    watched: true,
  },
];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI(allMovies, ulRoot);
  }
});

function handleEdit(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, ulRoot);
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key.attr[key]);
    } else {
      element[key] = attr[key];
    }
    children.forEach((child) => {
      if (typeof child === 'object') {
        element.append(child);
      }
      if (typeof child === 'string') {
        let node = document.createTextNode(child);
        element.append(node);
      }
    });
  }
  return element;
}

function createMovieUI(data, ulRoot) {
  ulRoot.innerHTML = '';
  data.forEach((movie, i) => {
    let li = elm(
      'li',
      {},
      elm(
        'button',
        { id: i, addEventListener: 'click', handleEdit },
        movie.watched ? 'Watched' : 'To Watched'
      ),
      elm('label', { for: i }, movie.name)
    );

    ulRoot.append(li);
  });
}

createMovieUI(allMovies, ulRoot);
