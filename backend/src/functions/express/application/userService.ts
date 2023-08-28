import crypto from "crypto";
import { User } from "../domain/user/user";
import { UserRepository } from "../domain/user/userRepository";

const userRepository = new UserRepository();

export class UserService {
  async registerUser(auth0UserId: string, name: string, email: string) {
    // 二段登録回避のためauth0UserIdが重複していないか確認
    const users = await userRepository.findForAuth0UserId(auth0UserId);
    if (users.length > 0) throw new Error("Userは既に存在します");

    return await userRepository.save(
      new User(crypto.randomUUID(), auth0UserId, name, email)
    );
  }
}
