import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.prefix('/api');

  router.get('/', controller.home.index);

  // 用户注册
  router.post('/v1/user', controller.v1.user.create);
};
