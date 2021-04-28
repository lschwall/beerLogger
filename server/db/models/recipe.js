module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        recipe_name: {
            type: DataTypes.TEXT,
        },
        cook_time: {
            type: DataTypes.TEXT,
        },
        servings: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true,
    });

    return Recipe;
};