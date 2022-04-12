import { Application } from 'egg';
// 视频表
export default (app: Application) => {
  const { DataTypes } = app.Sequelize;
  const Video = app.model.define(
    'video',
    {
      video_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '视频标题',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '视频描述',
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '视频封面',
      },
    },
    {
      freezeTableName: true,
    },
  );
  return Video;
};
