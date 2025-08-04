///// Component /////
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

///// Router /////
export function createRouter(router) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(router);
    });
    routeRender();
  };
}
