import abstract_view from './abstract_view.js';

export default class extends abstract_view {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi accusantium dolor neque.</p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
  }
}
