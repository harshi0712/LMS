

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

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
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    assessmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'grades'
});

export default Grade;
