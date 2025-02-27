import { Test, TestingModule } from '@nestjs/testing';
import { PersonRepositoryService } from './person-repository.service';

describe('PersonRepositoryService', () => {
  let service: PersonRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonRepositoryService],
    }).compile();

    service = module.get<PersonRepositoryService>(PersonRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
