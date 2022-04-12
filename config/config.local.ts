import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'youtube',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
  };
  // 配置安全规范
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
