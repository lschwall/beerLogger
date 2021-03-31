module.exports = (sequelize, DataTypes) => {
    const Beer = sequelize.define('beer', {
        beer_label: {
            type: DataTypes.TEXT,
        },
        beer_brewery: {
            type: DataTypes.TEXT,
        },
        review: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true,
    });

    return Beer;
};