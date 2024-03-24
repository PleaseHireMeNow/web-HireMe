import { Injectable, signal } from '@angular/core';
import { ApiService } from '../api.service';
import { TopicSelection } from '../../common/models/topic-selection';
import { TopicOptions } from '../../common/models/topic-options';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topicOptions = signal({} as TopicOptions)

  constructor(private ApiService: ApiService,) { }

  async getAllTopics() {
    await this.ApiService.getAllTopics()
  }
}
