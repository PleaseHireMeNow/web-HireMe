import { Answer } from "./session";


export interface AnswerHistory {
    question_id: string;
    question_content: QuestionContent;
    responses: [
      {
        timestamp: {seconds:number, nanoseconds:number},
        response: {
            answer: Answer;
        };
        session_id: string;
      }
    ];
  }

  export interface QuestionContent {
    text: string;
    answers: Answer[];
  }