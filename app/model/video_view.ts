import { Application } from 'egg';

// 视频观看记录表
export default (app: Application) => {
  const { DataTypes } = app.Sequelize;
  const VideoView = app.model.define(
    'video_view',
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      video_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );
  return VideoView;
};
