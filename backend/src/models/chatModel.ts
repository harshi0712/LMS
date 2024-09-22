// // models/chatModel.ts
// import { DataTypes, Model, Optional } from 'sequelize';
// import sequelize from '../connection/connectDB';

// interface MessageAttributes {
//   id: number;
//   text: string;
//   time: Date; // Changed to Date type for better handling
//   sender: string; // Consider using a User ID type if applicable
//   recipient: string; // Consider using a User ID type if applicable
// }

// // Interface for creating a Message without requiring the 'id'
// interface MessageCreationAttributes extends Optional<MessageAttributes, 'id'> {}

// // Message model definition extending Sequelize's Model
// class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
//   public id!: number;
//   public text!: string;
//   public time!: Date; // Changed to Date type
//   public sender!: string;
//   public recipient!: string;
// }

// Message.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     time: {
//       type: DataTypes.DATE, // Changed to DATE type for better handling
//       allowNull: false,
//       defaultValue: DataTypes.NOW, // Default to current time
//     },
//     sender: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     recipient: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'messages',
//     timestamps: true, // Enable automatic timestamps
//   }
// );

// // Function to add a new message to the database
// export const addMessage = async (messageData: MessageCreationAttributes) => {
//   try {
//     return await Message.create(messageData);
//   } catch (error) {
//     console.error('Error adding message:', error);
//     throw new Error('Unable to add message');
//   }
// };

// // Function to retrieve all messages from the database
// export const getMessages = async () => {
//   try {
//     return await Message.findAll();
//   } catch (error) {
//     console.error('Error retrieving messages:', error);
//     throw new Error('Unable to retrieve messages');
//   }
// };

// export default Message;
