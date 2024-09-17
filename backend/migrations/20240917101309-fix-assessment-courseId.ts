import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.changeColumn('assessments', 'courseId', {
    type: DataTypes.INTEGER, // Make sure this matches with `id` in `courses`
  });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.changeColumn('assessments', 'courseId', {
    type: DataTypes.INTEGER, // Revert to old type if needed
  });
}
