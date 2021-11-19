const combineRouters = require('koa-combine-routers');
const ping = require('./ping');
const postsRouter = require('./posts/latest');
const commentsRouter = require('./posts/comments/latest')

const router = combineRouters(
  ping,
  postsRouter,
  commentsRouter,
);

module.exports = router;
