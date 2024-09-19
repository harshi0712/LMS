// models/chatModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';

interface MessageAttributes {
  id: number;
  text: string;
  time: string;
  sender: string;
  recipient: string;
}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id'> {}

class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
  public id!: number;
  public text!: string;
  public time!: string;
  public sender!: string;
  public recipient!: string;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
  }
);

export const addMessage = async (messageData: MessageCreationAttributes) => {
  return Message.create(messageData);
};

export const getMessages = async () => {
  return Message.findAll();
};
