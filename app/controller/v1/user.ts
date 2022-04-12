import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  /**
   * 1、用户注册
   */
  async create() {
    const { ctx, service } = this;
    const { name, email, password } = ctx.request.body;
    // 1:验证上传的参数
    ctx.validate({
      name: { type: 'string', require: true },
      email: { type: 'email', require: true },
      password: { type: 'string', require: true },
    });
    // 2: 判断是否已经存在name或者email
    const userService = service.user;
    if (await userService.findByName(name)) {
      ctx.throw(422, '用户名已存在');
    }
    if (await userService.findByEmail(email)) {
      ctx.throw(422, '邮箱已存在');
    }
    // 3: 创建用户
    const user = await userService.createUser(name, email, password);
    if (user) {
      ctx.body = {
        user: {
          name,
          email,
        },
      };
    } else {
      ctx.throw('510', 'create user failed');
    }
  }

  /**
   * 2、用户登录
   */
  async login() {
    // 1、验证登录的密码和邮箱
    const { ctx, service } = this;
    const { email } = ctx.request.body;
    ctx.validate({
      email: { type: 'email', require: true },
      password: { type: 'string', require: true },
    });
    // 2、查询邮箱是否存在
    const userService = service.user;
    const user = await userService.findByEmail(email, 'withPassword');
    if (!user) {
      ctx.throw(422, '邮箱不存在！');
    }
    // 3、查询密码是否与数据库的一致

    // 4、生成token返回用户基本信息
  }
}
