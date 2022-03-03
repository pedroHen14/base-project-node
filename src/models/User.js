const { Model, DataTypes } = require("sequelize");

class User extends Model {
  /**
   * aqui configuramos os campos da tabela
   * os campos automáticos não precisam ser declarados
   */
  static init(sequelize) {
    super.init(
      {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  /**
   * aqui configuramos os relacionamentos
   */
  static associate(models) {
  }
}

module.exports = User;