#!/usr/bin/node

class AppController {
  static getHomepage(req, res) {
    res.status(200);
    res.send('Hello Holberton School!');
  }
}

export default AppController;
