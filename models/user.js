module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 3]
            }
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 3]
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 3]
            }
        },
    });

    User.associate = function(models) {
        User.hasMany(models.Date, {
            onDelete: "cascade"
        });

    };

    return User;



}