import { Service } from 'egg';

export default class User extends Service {
  get User() {
    return this.app.model.User;
  }

  findByName(name: string) {
    return this.User.findOne({ where: { name } });
  }

  findByEmail(email: string, scope?: string) {
    if (scope) {
      return this.User.scope(scope).findOne<>({ where: { email } });
    }
    return this.User.findOne({ where: { email } });
  }

  async createUser(name: string, email: string, password: string) {
    password = this.ctx.helper.md5(password);
    return await this.User.create({ name, email, password });
  }
}
