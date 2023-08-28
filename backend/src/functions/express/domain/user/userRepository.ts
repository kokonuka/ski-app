import { UserGateway } from "@functions/express/infrastructure/userGateway";
import { User } from "./user";

const userGateway = new UserGateway();

export class UserRepository {
  async findForId(id: string): Promise<User | undefined> {
    const user = await userGateway.findForId(id);

    return user as User | undefined;
  }

  async findForAuth0UserId(auth0UserId: string): Promise<User[]> {
    const userRecord = await userGateway.findForAuth0UserId(auth0UserId);

    return userRecord as User[];
  }

  async save(user: User): Promise<User> {
    await userGateway.insert(user.id, user.auth0UserId, user.name, user.email);

    return user;
  }
}
