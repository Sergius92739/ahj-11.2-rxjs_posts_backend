const Router = require('koa-router');
const data = require('../../api/RandomData');
const router = new Router();

router.get('/posts/latest', async (ctx) => {
  data.postGenerator();
  ctx.response.body = {
    status: 'ok',
    data: data.posts,
  }
});

module.exports = router;
