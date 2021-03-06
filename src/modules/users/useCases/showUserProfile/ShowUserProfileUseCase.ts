import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const list_user = this.usersRepository.findById(user_id);

    if (!list_user) {
      throw new Error("User not exists.");
    }

    return list_user;
  }
}

export { ShowUserProfileUseCase };

