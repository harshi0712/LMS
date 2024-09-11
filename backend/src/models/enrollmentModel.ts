

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import User from '../models/userModel';
import Course from '../models/courseModel';

interface EnrollmentAttributes {
  id: number;
  userId: number;
  courseId: number;
}

interface EnrollmentCreationAttributes extends Optional<EnrollmentAttributes, 'id'> {}

class Enrollment extends Model<EnrollmentAttributes, EnrollmentCreationAttributes> implements EnrollmentAttributes {
  public id!: number;
  public userId!: number;
  public courseId!: number;
}

// Initialize the Enrollment model
Enrollment.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  courseId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Course,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'enrollments',
  timestamps: false
});

// Set up associations
User.hasMany(Enrollment, { foreignKey: 'userId' });
Enrollment.belongsTo(User, { foreignKey: 'userId' });

Course.hasMany(Enrollment, { foreignKey: 'courseId' });
Enrollment.belongsTo(Course, { foreignKey: 'courseId' });

export default Enrollment;
