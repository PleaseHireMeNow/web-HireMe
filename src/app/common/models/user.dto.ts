import { User } from './user';

export interface UserRequestDto {
  userToken: string;
}

// the resopnse has everything except the userToken from the user type defined in User.ts
export type UserResponseDto = Omit<User, 'userToken'>;
