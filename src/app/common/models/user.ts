import { CompletedQuestion } from "./question";
import { Stack } from "./topics";

export interface User {
  userToken: string;
  userId: string;
  username: string;
  stack: Stack[];
  isGuest: boolean;
  history: CompletedQuestion[];
  userAnswer: CompletedQuestion;
}
