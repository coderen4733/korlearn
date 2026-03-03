import { UserRepository } from "../repositories/user.repository.js";

const userRepository = new UserRepository();

export class UserService {
  readMe = async (user) => {
    // 1. Argument
    const userId = user.id;
    // 2. Repository
    const data = await userRepository.readUserById({ id: userId });
    // 3. Return
    return data;
  }
}