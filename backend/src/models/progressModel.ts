
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

interface ProgressAttributes {
    id: number;
    userId: number;
    courseId: number;
    completedModules: number;
    totalModules: number;
}

interface ProgressCreationAttributes extends Optional<ProgressAttributes, 'id'> {}

class Progress extends Model<ProgressAttributes, ProgressCreationAttributes> implements ProgressAttributes {
    public id!: number;
    public userId!: number;
    public courseId!: number;
    public completedModules!: number;
    public totalModules!: number;
}

Progress.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    completedModules: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    totalModules: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'progress',
    timestamps: false,
});

export default Progress;
