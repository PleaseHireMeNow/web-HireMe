import { CompletedQuestion } from "./question";
import { Topics } from "./topics";

export interface User {
  userToken: string;
  userId: string;
  username: string;
  stack: Topics[];
  isGuest: boolean;
  history: CompletedQuestion[];
  userAnswer: CompletedQuestion;
}
