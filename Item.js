class Item {
  constructor(name, content, date) {
    this.name = name;
    this.content = content;
    this.creationDate = date;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }

  get content() {
    return this.content;
  }

  set content(value) {
    this.content = value;
  }

  get creationDate() {
    return this.creationDate;
  }

  set creationDate(value) {
    this.creationDate = value;
  }

  addItem() {
    // TODO
  }
}
