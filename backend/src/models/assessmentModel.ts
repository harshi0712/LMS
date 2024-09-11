

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import Course from '../models/courseModel';

// Define the attributes for the Assessment model
interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface AssessmentAttributes {
  id: number;
  title: string;
  courseId: number;
  questions: Question[]; // JSON type or text, depending on DB support
}

interface AssessmentCreationAttributes extends Optional<AssessmentAttributes, 'id'> {}

// Define the Assessment model
class Assessment extends Model<AssessmentAttributes, AssessmentCreationAttributes> implements AssessmentAttributes {
  public id!: number;
  public title!: string;
  public courseId!: number;
  public questions!: Question[]; // Assuming JSON type for Sequelize

  // Define JSON attribute for questions
  getQuestions(): Question[] {
    return this.getDataValue('questions') || [];
  }
}

Assessment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: 'id'
    }
  },
  questions: {
    type: DataTypes.JSON, // JSON type for storing nested questions
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'assessments',
  timestamps: false
});

// Set up associations
Course.hasMany(Assessment, { foreignKey: 'courseId' });
Assessment.belongsTo(Course, { foreignKey: 'courseId' });

export default Assessment;
