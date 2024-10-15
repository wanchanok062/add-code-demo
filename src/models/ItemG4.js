module.exports = (sequelize, DataTypes) => {
    const ItemG4 = sequelize.define('ItemG4', {
      item_g4_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      digit_4: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'item_g4',
      timestamps: false
    });
  
    ItemG4.associate = (models) => {
      ItemG4.hasMany(models.CodeCondition, { foreignKey: 'item_g4_code' });
    };
  
    return ItemG4;
  };
  