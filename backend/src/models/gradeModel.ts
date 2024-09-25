// src/models/gradeModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import User from './userModel'; // Import User model
import {Assessment} from './assessmentModel'; // Import Assessment model

interface GradeAttributes {
    id: number;
    userId: number;
    assessmentId: number;
    score: number;
}

interface GradeCreationAttributes extends Optional<GradeAttributes, 'id'> {}

class Grade extends Model<GradeAttributes, GradeCreationAttributes> implements GradeAttributes {
    public id!: number;
    public userId!: number;
    public assessmentId!: number;
    public score!: number;
}

Grade.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id', // Ensure this matches the primary key in User model
        },
    },
    assessmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Assessment,
            key: 'id', // Ensure this matches the primary key in Assessment model
        },
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'grades',
    timestamps: true, // Enable automatic createdAt/updatedAt fields
});

// Set up associations
User.hasMany(Grade, { foreignKey: 'userId' });
Grade.belongsTo(User, { foreignKey: 'userId' });

Assessment.hasMany(Grade, { foreignKey: 'assessmentId' });
Grade.belongsTo(Assessment, { foreignKey: 'assessmentId' });

export default Grade;
