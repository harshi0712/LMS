//courseModels 
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  modules: any; // Assuming JSON type for modules
}

interface CourseCreationAttributes extends Optional<CourseAttributes, 'id'> {}

class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public modules!: any;

  getModules(): any {
    return this.getDataValue('modules') || [];
  }
}

Course.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modules: {
    type: DataTypes.JSON,
    allowNull:true
  }
}, {
  sequelize,
  tableName: 'courses',
  timestamps: false
});

export default Course;
