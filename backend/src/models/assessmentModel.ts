import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import Course from './courseModel';

// Define the attributes for the Assessment model
interface AssessmentAttributes {
  id: number;
  title: string;
  courseId: number; // Ensure this matches with `id` in `Course`
  questions: Array<{              // Update questions to be an array of objects
    text: string;
    options: string[];
    correctAnswer: string;
  }>;
}

interface AssessmentCreationAttributes extends Optional<AssessmentAttributes, 'id'> {}

// Define the Assessment model
class Assessment extends Model<AssessmentAttributes, AssessmentCreationAttributes> implements AssessmentAttributes {
  public id!: number;
  public title!: string;
  public courseId!: number;
  public questions!: Array<{       // Array of objects for questions
    text: string;
    options: string[];
    correctAnswer: string;
  }>;

  getQuestions(): object {
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
      model: 'courses',
      key: 'id'
    }
  },
  questions: {
    type: DataTypes.JSON, // Store the array as JSON in the database
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'assessments',
  timestamps: true,
});

// Set up associations
Course.hasMany(Assessment, { foreignKey: 'courseId' });
Assessment.belongsTo(Course, { foreignKey: 'courseId' });

export default Assessment;
