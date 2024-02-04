import { Question } from "./question";
import { TopicSelection } from "./topic-selection";

export interface Session {
  current_question: number;
  answered_correctly: number;
  timestamp: {seconds:number, nanoseconds:number},
  questions: SessionQuestion[];
  session_id?: string;
  topic_selection: TopicSelection;
}
  export interface SessionQuestion {
    question: Question,
    answer: Answer
  }
  export interface AnswerContent {
    text: string;
  }
  export interface Answer {
    answer_content: AnswerContent;
    is_correct: boolean;
  }