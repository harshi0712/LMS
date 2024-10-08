


import { Request, Response } from 'express';
import { Op } from 'sequelize'; // Import Op from Sequelize
import { Assessment, Question, Answer } from '../models/assessmentModel';
import { log } from 'console';


// Create a new assessment with questions and answers
export const createAssessment = async (req: Request, res: Response) => {
    console.log("in createAssessment");
    const { title, questions, courseId } = req.body; // Include courseId

    try {
        // Create a new assessment
        const assessment = await Assessment.create({ title, courseId }); // Save courseId
        console.log(assessment.id);
        
        // Create questions and their answers
        for (const question of questions) {
            console.log(question.questionText);
            const newQuestion = await Question.create({
                assessmentId: assessment.id,
                questionText: question.questionText,
            });

            for (const answer of question.answers) {
                await Answer.create({
                    questionId: newQuestion.id,
                    answerText: answer.answerText,
                    isCorrect: answer.isCorrect,
                });
            }
        }

        res.status(201).json(assessment);
    } catch (error) {
        console.error('Error creating assessment:', error);
        res.status(500).json({ message: 'Error creating assessment' });
    }
};


// Get all assessments
export const getAllAssessments = async (req: Request, res: Response) => {
    try {
        const assessments = await Assessment.findAll({
            include: [
                {
                    model: Question,
                    include: [Answer], // Include answers for each question
                },
            ],
        });
        res.json(assessments);
    } catch (error) {
        console.error('Error fetching assessments:', error);
        res.status(500).json({ message: 'Error fetching assessments' });
    }
};

// Get all assessments by course ID
export const getAssessments = async (req: Request, res: Response) => {
    const { courseId } = req.params; // Get courseId from request parameters

    try {
        const assessments = await Assessment.findAll({
            where: { courseId }, // Filter by courseId
            include: [
                {
                    model: Question,
                    include: [Answer], // Include answers for each question
                },
            ],
        });

        if (assessments.length === 0) {
            return res.status(404).json({ message: 'No assessments found for this course.' });
        }

        res.json(assessments);
    } catch (error) {
        console.error('Error fetching assessments:', error);
        res.status(500).json({ message: 'Error fetching assessments' });
    }
};


// Get a single assessment by ID
export const getAssessmentById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const assessment = await Assessment.findByPk(id, {
            include: [
                {
                    model: Question,
                    include: [Answer],
                },
            ],
        });

        if (!assessment) {
            return res.status(404).json({ message: 'Assessment not found' });
        }

        res.json(assessment);
    } catch (error) {
        console.error('Error fetching assessment:', error);
        res.status(500).json({ message: 'Error fetching assessment' });
    }
};

// Update an assessment
export const updateAssessment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, questions } = req.body;

    try {
        const [updated] = await Assessment.update({ title }, { where: { id } });

        if (updated) {
            // Optionally, update questions and answers here
            await Question.destroy({ where: { assessmentId: id } });
            await Answer.destroy({ where: { questionId: (await Question.findAll({ where: { assessmentId: id }, attributes: ['id'] })).map(q => q.id) } });

            for (const question of questions) {
                const newQuestion = await Question.create({
                    assessmentId: id,
                    questionText: question.questionText,
                });

                for (const answer of question.answers) {
                    await Answer.create({
                        questionId: newQuestion.id,
                        answerText: answer.answerText,
                        isCorrect: answer.isCorrect,
                    });
                }
            }

            const updatedAssessment = await Assessment.findByPk(id, {
                include: [
                    {
                        model: Question,
                        include: [Answer],
                    },
                ],
            });
            res.json(updatedAssessment);
        } else {
            res.status(404).json({ message: 'Assessment not found' });
        }
    } catch (error) {
        console.error('Error updating assessment:', error);
        res.status(500).json({ message: 'Error updating assessment' });
    }
};

// Delete an assessment
export const deleteAssessment = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deleted = await Assessment.destroy({ where: { id } });

        if (deleted) {
            await Question.destroy({ where: { assessmentId: id } });
            await Answer.destroy({ where: { questionId: { [Op.in]: (await Question.findAll({ where: { assessmentId: id }, attributes: ['id'] })).map(q => q.id) } } });
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'Assessment not found' });
        }
    } catch (error) {
        console.error('Error deleting assessment:', error);
        res.status(500).json({ message: 'Error deleting assessment' });
    }
};
