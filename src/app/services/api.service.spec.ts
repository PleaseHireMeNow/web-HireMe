import { TestBed } from "@angular/core/testing"
import { ApiService } from "./api.service"


describe('tests for api service', () => {
  let apiService: ApiService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    }).compileComponents();
  })

  it('should make an axios post', () => {
    apiService = new ApiService()
  })

})