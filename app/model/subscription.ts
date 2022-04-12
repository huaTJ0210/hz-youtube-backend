import { Application } from 'egg';

// 记录订阅关系表
export default (app: Application) => {
  const { DataTypes } = app.Sequelize;

  const Subscription = app.model.define(
    'subscription',
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      channel_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Subscription;
};
