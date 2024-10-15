module.exports = (sequelize, DataTypes) => {
    const Ibrand1 = sequelize.define('Ibrand1', {
      item_b1_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      item_b1_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      digit_7: {
        type: DataTypes.STRING,
        allowNull: true
      },
      abbr_name: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'item_b1',
      timestamps: false
    });

    Ibrand1.associate = (models) => {
      Ibrand1.hasMany(models.CodeCondition, { foreignKey: 'item_b1_code' });
    };
    
    return Ibrand1;
  };
  