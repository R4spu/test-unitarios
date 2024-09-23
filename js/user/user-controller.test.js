const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // ●	Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios.

test('Verify user is not add', () => {    
    let user = new User(3456,"Juan", "juan@gmail.com");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
})

test('remove user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  expect(userController.users).not.toContain(user)
  userController.add(user);   
  expect(userController.getUsers()).toContain(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('remove user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

// ●	Implementar 2 pruebas unitarias para la función findByEmail().
test('find user by email', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail(user.email)).toEqual(user);
});

test('find user by email', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail(user.email)).not.toContain(user);
});

test('find user by id', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(user.id)).toEqual(user);
});

test('find user by id', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  expect(userController.findById(user.id)).not.toContain(user);
});