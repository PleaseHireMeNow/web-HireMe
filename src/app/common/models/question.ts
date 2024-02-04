// export interface Answer {
//   answerContent: {
//     text: string;
//   };
//   isCorrect: boolean;
// }

// export interface Response {
//   responseContent: {
//     text: string;
//   };
//   isCorrect: boolean;
// }

// export interface QuestionContent {
//   text: string;
//   answers: Answer[];
// }

// export interface Question {
//   questionId: string;
//   questionContent: QuestionContent;
// }

export interface CompletedQuestion extends Question {
  responses: Response[];
}

export interface Question {
  question_id: string;
  question_content: {
    text: string;
    answers: Array<{
      answer_content: {
        text: string;
      };
      is_correct: boolean;
    }>;
  };
}

