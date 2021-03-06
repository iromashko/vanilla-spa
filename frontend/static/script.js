import dashboard from './views/dashboard.js';
import posts from './views/posts.js';
import settings from './views/settings.js';
import view_post from './views/view_post.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values];
    })
  );
};

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const router = async () => {
  const routes = [
    {
      path: '/',
      view: dashboard,
    },
    {
      path: '/posts',
      view: posts,
    },
    {
      path: '/posts/:id',
      view: view_post,
    },
    {
      path: '/settings',
      view: settings,
    },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
