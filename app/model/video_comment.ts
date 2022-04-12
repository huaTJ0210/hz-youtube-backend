import { Application } from 'egg';

export default (app: Application) => {
  const { DataTypes, UUIDV4 } = app.Sequelize;
  const VideoComment = app.model.define(
    'video_comment',
    {
      content_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: '评论的内容',
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
  return VideoComment;
};
