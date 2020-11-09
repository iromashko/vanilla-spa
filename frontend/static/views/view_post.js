import abstract_view from './abstract_view.js';

export default class extends abstract_view {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    return `
      <h1>${this.params.id}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi accusantium dolor neque.</p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
  }
}
