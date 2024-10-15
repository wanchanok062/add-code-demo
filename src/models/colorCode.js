module.exports = (sequelize, DataTypes) => {
    const ColorCode = sequelize.define('ColorCode', {
      code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      film_type: {
        type: DataTypes.STRING,
        allowNull: true 
      },
      digit_19_20: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'color_code',
      timestamps: false
    });
  
    return ColorCode;
  };
  