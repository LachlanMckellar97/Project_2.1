module.exports = function(sequelize, DataTypes) {
    var Date = sequelize.define("date", {
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
        set_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 8]
            }
        },
        interval_0400: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0430: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0500: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0530: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0600: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0630: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0700: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0730: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0800: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0830: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "sleep",
            validate: {
                len: [1, 255]
            }
        },
        interval_0900: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Eat",
            validate: {
                len: [1, 255]
            }
        },
        interval_0930: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1000: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1030: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1100: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1130: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1200: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Eat",
            validate: {
                len: [1, 255]
            }
        },
        interval_1230: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1300: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1330: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1400: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1430: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1500: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1530: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1600: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1630: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1700: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1730: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1800: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1830: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1900: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_1930: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2000: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2030: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2100: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2130: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2200: {
            type: DataTypes.STRING,
            defaultValue: "sleep",
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2230: {
            type: DataTypes.STRING,
            defaultValue: "sleep",
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2300: {
            type: DataTypes.STRING,
            defaultValue: "sleep",
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        interval_2330: {
            type: DataTypes.STRING,
            defaultValue: "sleep",
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

    });

    Date.associate = function(models) {
        Date.belongsTo(models.Date, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Date;



}