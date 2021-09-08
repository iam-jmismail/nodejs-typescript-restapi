"use strict";
import { Model } from "sequelize";

interface UserAttrubute {
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttrubute> implements UserAttrubute {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
