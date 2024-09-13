
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import User from '../models/userModel';
import Assessment from '../models/assessmentModel';

interface SubmissionAttributes {
  id: number;
  studentId: number;
  assessmentId: number;
  submissionDate: Date;
  content: string;
  grade: number | null;
}

interface SubmissionCreationAttributes extends Optional<SubmissionAttributes, 'id'> {}

// Define the Submission model
class Submission extends Model<SubmissionAttributes, SubmissionCreationAttributes> implements SubmissionAttributes {
  public id!: number;
  public studentId!: number;
  public assessmentId!: number;
  public submissionDate!: Date;
  public content!: string;
  public grade!: number | null;
}

// Initialize the Submission model
Submission.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  assessmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Assessment,
      key: 'id'
    }
  },
  submissionDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'submissions',
  timestamps: false
});

// Set up associations
User.hasMany(Submission, { foreignKey: 'studentId' });
Submission.belongsTo(User, { foreignKey: 'studentId' });

Assessment.hasMany(Submission, { foreignKey: 'assessmentId' });
Submission.belongsTo(Assessment, { foreignKey: 'assessmentId' });

export default Submission;
