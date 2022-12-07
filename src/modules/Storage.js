class Storage {
  constructor(key, resource) {
    this.key = key;
    this.resource = resource;
  }

  static getResourceFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem(this.key));
  }

  static saveResourceToLocalStorage() {
    window.localStorage.setItem(this.key, JSON.stringify(this.resource));
  }
}

export default Storage;