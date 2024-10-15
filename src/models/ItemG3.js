module.exports = (sequelize, DataTypes) => {
    const ItemG3 = sequelize.define('ItemG3', {
      item_g3_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      item_g3_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      digit_5_6: {
        type: DataTypes.STRING,
        allowNull: true
      },
      accessory: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'item_g3',
      timestamps: false
    });
  
    return ItemG3;
  };
  