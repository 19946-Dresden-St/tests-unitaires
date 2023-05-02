class Item {
  constructor(name, content, date) {
    this.name = name;
    this.content = content;
    this.creationDate = date;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get creationDate() {
    return this._creationDate;
  }

  set creationDate(value) {
    this._creationDate = value;
  }
}

module.exports = Item;
