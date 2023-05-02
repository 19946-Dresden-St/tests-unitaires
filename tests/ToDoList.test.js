const ToDoList = require('../ToDoList.js');
const Item = require('../Item.js');
const User = require('../User.js');

let tdl = new ToDoList();
let user = new User('mail@mail.com', 'Aekfbakj7654', 'Doe',  'John', new Date('1997-10-28'), tdl);

let item = new Item('Sport', '1983482374 pompes', new Date());
let item2 = new Item('Faire les courses', 'Acheter du lait', new Date());
let item3 = new Item('Faire les courses', 'Acheter des bonbons', new Date());
let item4 = new Item('djsdbfjkzefb', 'zekjfbeklfnzelkfnzelkf', new Date());

test('Ajout réussi item dans todolist', () => {
    expect(user.todolist.addItem(item, user)).toBe(true);
});

test('Ajout raté item dans todolist (meme nom, meme date)', () => {
    user.todolist.addItem(item2, user);

    expect(user.todolist.addItem(item3, user)).toBe(false);
});

test('Ajout raté item dans todolist (meme date, nom différent)', () => {
    user.todolist.addItem(item2, user);

    expect(user.todolist.addItem(item4, user)).toBe(false);
});