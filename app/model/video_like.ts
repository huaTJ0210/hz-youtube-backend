import { Application } from 'egg';

// 视频点赞表
export default (app: Application) => {
  const { DataTypes } = app.Sequelize;
  const VideoLike = app.model.define(
    'video_like',
    {
      like: {
        type: DataTypes.ENUM,
        values: ['1'],
        allowNull: false,
        comment: '是否喜欢',
      },
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
  return VideoLike;
};
