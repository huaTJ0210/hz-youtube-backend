import { QueryInterface } from 'sequelize';
export default {
  async up(queryInterface: QueryInterface, Sequelize) {
    const { DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('user', {
      user_id: { type: UUID, primaryKey: true },
      name: { type: STRING(30), allowNull: false },
      email: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
      cover: { type: STRING, defaultValue: null },
      channel_description: { type: STRING, defaultValue: null },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface: QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
