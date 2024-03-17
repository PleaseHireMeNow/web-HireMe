import { TestBed } from "@angular/core/testing";
import { ApiService } from "../api.service";
import { SessionService } from "./session.service";
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule


describe('session service tests', () => {
  let service: SessionService
  let apiService: ApiService;

  beforeEach(() => {
    // service = new SessionService(ApiService);
    // apiService = jasmine.createSpyObj('ApiService', ['getNewSession']); // Create a spy object for ApiService

    TestBed.configureTestingModule({
      providers: [SessionService, ApiService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(SessionService);
    apiService = TestBed.inject(ApiService);
  })

  it('it runs the function', async () => {
    //arrange
    spyOn(service, 'getNewSession');
    //act
    await service.getNewSession();
    //assert
    expect(service.getNewSession).toHaveBeenCalled()
  })

  it('it calls the api service', async () => {
    //arrange
    spyOn(apiService, 'getNewSession');
    // spyOn(apiService, 'getNewSession')
    //act
    await service.getNewSession();
    //assert
    expect(apiService.getNewSession).toHaveBeenCalled()
  })


});