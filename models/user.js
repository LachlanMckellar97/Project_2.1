module.exports = function(Sequelize, DataTypes) {
    var User = Sequelize.define("User", {
        // Giving the Author model a name of type STRING
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            len: {
              args: [1],
              msg: "Invalid Username"
            }
          }
        },
        password: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            len: {
              args: [1],
              msg: "Invalid Password"
            }
          }
        },
        firstName: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            len: {
              args: [1],
              msg: "Invalid first name"
            }
          }
        },
        lastName: {
          type: DataTypes.STRING(100),
          allowNull: false,
          validate: {
            len: {
              args: [1],
              msg: "Invalid last name"
            }
          }
        },
        weight: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
          },
        height: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
          },
        age: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
          },
      });

    User.associate = function(models) {
        User.hasMany(models.Date, {
            onDelete: "cascade"
        });

    };

    return User;



}