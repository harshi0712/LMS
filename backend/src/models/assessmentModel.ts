


// assessmentModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection/connectDB';

class Assessment extends Model {
    public id!: number;
    public title!: string;
    public courseId!: number; // New field
    public createdAt!: Date;
    public updatedAt!: Date;
}

class Question extends Model {
    public id!: number;
    public assessmentId!: number;
    public questionText!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

class Answer extends Model {
    public id!: number;
    public questionId!: number;
    public answerText!: string;
    public isCorrect!: boolean; // Indicates if the answer is correct
    public createdAt!: Date;
    public updatedAt!: Date;
}

// Initialize Assessment Model
Assessment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: { // New field
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses', // Replace with your actual Course model name
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Assessment',
});

// Initialize Question Model
Question.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    assessmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Assessment,
            key: 'id',
        },
    },
    questionText: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Question',
});

// Initialize Answer Model
Answer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'id',
        },
    },
    answerText: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Answer',
});

// Associations
Assessment.hasMany(Question, { foreignKey: 'assessmentId' });
Question.belongsTo(Assessment, { foreignKey: 'assessmentId' });
Question.hasMany(Answer, { foreignKey: 'questionId' });
Answer.belongsTo(Question, { foreignKey: 'questionId' });

export { Assessment, Question, Answer };
