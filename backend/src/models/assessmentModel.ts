// src/models/assessmentModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import Course from './courseModel';

// Define the attributes for the Assessment model
interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface AssessmentAttributes {
  id: number;
  title: string;
  courseId: number; // Ensure this matches with `id` in `Course`
  questions: Question[]; // JSON type for storing questions
}

interface AssessmentCreationAttributes extends Optional<AssessmentAttributes, 'id'> { }

// Define the Assessment model
class Assessment extends Model<AssessmentAttributes, AssessmentCreationAttributes> implements AssessmentAttributes {
  public id!: number;
  public title!: string;
  public courseId!: number;
  public questions!: Question[];

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
    type: DataTypes.INTEGER, // Ensure this matches with `id` in `Course`
    allowNull: false,
    references: {
      model: 'courses', // Referencing the table name directly
      key: 'id'
    }
  },
  questions: {
    type: DataTypes.JSON,
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
