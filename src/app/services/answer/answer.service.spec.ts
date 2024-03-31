import { TestBed } from '@angular/core/testing';

import { AnswerService } from './answer.service';
import { Answer } from '../../common/models/session';
import { Question } from '../../common/models/question';
import { ApiService } from '../api.service';

describe('AnswerService', () => {
  let service: AnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Test apiService', () => {
  let service: AnswerService;
  let apiService: ApiService;
  const mockApiService = {
    sendAnswer: () => {
      return Promise.resolve([])
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{provide: ApiService, useValue: mockApiService}]
    });
    apiService = TestBed.inject(ApiService)
    service = TestBed.inject(AnswerService);
  });

  it('should invoke api service when sendAnswer gets called', () => {
    // Arrange
    service = new AnswerService(apiService);
    spyOn(apiService, 'sendAnswer');
    let question = {} as Question;
    let answer = {} as Answer;
    // Act
    service.sendAnswer(question, answer);
    // Assert
    expect(apiService.sendAnswer).toHaveBeenCalledTimes(1)
  });
});
