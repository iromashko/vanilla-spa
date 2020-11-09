import abstract_view from './abstract_view.js';

export default class extends abstract_view {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
      <h1>Welcome back</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi accusantium dolor neque, rem harum illo fugit sed molestias tempora libero quas doloremque deleniti est dolorum, quaerat inventore perferendis a.</p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
  }
}
