const Router = require('koa-router');
const data = require('../../../api/RandomData');
const router = new Router();

router.get('/posts/:id/comments/latest', async (ctx) => {
  const { id } = ctx.params;
  ctx.response.body = {
    status: 'ok',
    data: data.findComment(id),
  }
});

module.exports = router;
