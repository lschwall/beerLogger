module.exports = (sequelize, DataTypes) => {
          const User = sequelize.define('users', {
                    first_name: {
                              type: DataTypes.TEXT,
                    },
                    last_name: {
                              type: DataTypes.TEXT,
                    },
                    user_name: {
                              type: DataTypes.TEXT,
                    },
                    user_password: {
                              type: DataTypes.TEXT,
                    },
                    email: {
                              type: DataTypes.TEXT,
                    },
          }, {
                    freezeTableName: true,
          });

          return User;
};