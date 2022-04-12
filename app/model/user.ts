import { Application } from 'egg';

export default (app: Application) => {
  const { UUIDV4, DataTypes } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      user_id: { type: DataTypes.UUID, primaryKey: true, defaultValue: UUIDV4 },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: '用户名称',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户邮箱',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户密码',
      },
      cover: {
        type: DataTypes.STRING,
        defaultValue: null,
        comment: '个人主页封面',
      },
      channel_description: {
        // 频道介绍
        type: DataTypes.STRING,
        defaultValue: null,
        comment: '频道介绍',
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: null,
        comment: '用户头像',
      },
    },
    {
      freezeTableName: true,
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: {},
      },
    },
  );

  return User;
};
