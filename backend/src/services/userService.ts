
import User from '../models/userModel';

export const findUserById = (id: string) => User.findById(id);
export const findUserByUsername = (username: string) => User.findOne({ username });
