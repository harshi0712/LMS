// src/models/courseModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  modules: any; // JSON type for storing nested modules
  courseImage: string;
  link: string;
}

interface CourseCreationAttributes extends Optional<CourseAttributes, 'id'> { }

class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public modules!: any; // Consider using a specific type if possible
  public courseImage!: string;
  public link!: string;

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
    allowNull: true
  },
  courseImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'courses',
  timestamps: false
});

export default Course;
