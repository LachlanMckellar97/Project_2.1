module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("category", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        
    });

    Category.associate = function(models) {

    };

    return Category;



}