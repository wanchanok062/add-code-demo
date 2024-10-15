// models/CodeCondition.js
module.exports = (sequelize, DataTypes) => {
    const CodeCondition = sequelize.define('CodeCondition', {
      condition_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      item_b1_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item_g3_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item_g4_code: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'code_condition',
      timestamps: false
    });
  
    CodeCondition.associate = (models) => {
      CodeCondition.belongsTo(models.Ibrand1, { foreignKey: 'item_b1_code', onUpdate: 'CASCADE' });
      CodeCondition.belongsTo(models.ItemG3, { foreignKey: 'item_g3_code', onUpdate: 'CASCADE' });
      CodeCondition.belongsTo(models.ItemG4, { foreignKey: 'item_g4_code', onUpdate: 'CASCADE' });
    };
  
    return CodeCondition;
  };
  