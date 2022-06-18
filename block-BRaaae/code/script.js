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

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith('on')) {
//       let eventType = key.replace('on', '').toLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });

//   return element;
// }

let elm = React.createElement;

function createMovieUI(data, ulRoot) {
  let movieUI = data.map((movie, i) => {
    let li = elm(
      'li',
      {},
      elm('label', { for: i }, movie.name),
      elm(
        'button',
        { id: i, onClick: handleEdit },
        movie.watched ? 'Watched' : 'To Watched'
      )
    );

    return li;
  });
  ReactDOM.render(movieUI, ulRoot);
}

createMovieUI(allMovies, ulRoot);
