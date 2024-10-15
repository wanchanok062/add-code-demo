module.exports = (sequelize, DataTypes) => {
    const Ibrand2 = sequelize.define('Ibrand2', {
      item_b2_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      item_b2_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      digit_9_10: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'item_b2',
      timestamps: false
    });
  
    return Ibrand2;
  };
  