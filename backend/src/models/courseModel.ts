import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  courseImage: string;
  link: string;
}

interface CourseCreationAttributes extends Optional<CourseAttributes, 'id'> {}

class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public courseImage!: string;
  public link!: string;
}

Course.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'courses',
  timestamps: true, // Enable timestamps for tracking creation and updates
});

export default Course;
