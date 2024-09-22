import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import User from '../models/userModel';
import Course from '../models/courseModel';

// Define the attributes of the Enrollment model
interface EnrollmentAttributes {
  id: number;
  userId: number; // Ensure this type matches the userModel's id type
  courseId: number; // Ensure this type matches the courseModel's id type
}

// Optional attributes for creating a new enrollment (id is optional)
interface EnrollmentCreationAttributes extends Optional<EnrollmentAttributes, 'id'> {}

class Enrollment extends Model<EnrollmentAttributes, EnrollmentCreationAttributes> implements EnrollmentAttributes {
  public id!: number;
  public userId!: number;
  public courseId!: number;

  // Timestamps are automatically created by Sequelize
  public readonly createdAt!: Date; // This field is read-only
  public readonly updatedAt!: Date; // This field is read-only
}

// Initialize the Enrollment model
Enrollment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER, // Ensure this matches the type in the User model
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  courseId: {
    type: DataTypes.INTEGER, // Ensure this matches the type in the Course model
    allowNull: false,
    references: {
      model: Course,
      key: 'id',
    },
  },
}, {
  sequelize,
  tableName: 'enrollments',
  timestamps: true, // Automatically create createdAt and updatedAt fields
});

// Set up associations
User.hasMany(Enrollment, { foreignKey: 'userId' });
Enrollment.belongsTo(User, { foreignKey: 'userId' });

Course.hasMany(Enrollment, { foreignKey: 'courseId' });
Enrollment.belongsTo(Course, { foreignKey: 'courseId' });

export default Enrollment;
