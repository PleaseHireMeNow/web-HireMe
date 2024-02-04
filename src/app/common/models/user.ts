// import { CompletedQuestion } from "./question";
// import { Topic } from "./topic";
import { AnswerHistory } from "./answer-history";
import { TopicSelection } from "./topic-selection";
import { Session } from "./session";

export interface User {
  user_id: string;
  username: string;
  topic_selection: [
    TopicSelection
  ];
  is_guest: boolean;
  session_history: Session[];
}