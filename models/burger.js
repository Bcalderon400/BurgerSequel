module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true
    });

    return Burger;
}