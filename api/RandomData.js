const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
faker.locale = 'ru';

class RandomData {
  constructor() {
    this.posts = [];
    this.comments = [];

    this.postGenerator = this.postGenerator.bind(this);
  }

  getPost() {
    return {
      id: uuidv4(),
      author_id: uuidv4(),
      title: faker.hacker.phrase(),
      author: faker.name.findName(),
      avatar: faker.image.avatar(),
      image: faker.image.image(),
      created: Date.now(),
    }
  }

  findComment(id) {
    if (this.comments.some((elem) => elem.post_id === id)) {
      const data = this.comments.find((element) => element.post_id === id);
      return data.comments;
    }
    return null;
  }

  getComment(post_id) {
    return {
      id: uuidv4(),
      post_id: post_id,
      author_id: uuidv4(),
      author: faker.name.findName(),
      avatar: faker.image.avatar(),
      content: faker.hacker.phrase(),
      created: Date.now(),
    }
  }

  static int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  postGenerator() {
    for (let i = 0; i < RandomData.int(1, 5); i += 1) {
      this.posts.push(this.getPost());
      if (this.posts.length > 10) {
        this.posts.shift();
      }
    }

    this.commentGenerator();
  }

  commentGenerator() {
    this.posts.forEach((post) => {
      const temp = [];

      for (let i = 0; i < RandomData.int(1, 3); i += 1) {
        temp.push(this.getComment(post.id));
      }

      this.comments.push({
        post_id: post.id,
        comments: temp,
      });

      if (this.comments.length > 10) {
        this.comments.shift();
      }
    })
  }
}

const data = new RandomData();

module.exports = data;
