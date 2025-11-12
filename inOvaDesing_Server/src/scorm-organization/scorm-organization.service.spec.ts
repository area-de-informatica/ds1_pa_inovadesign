import { Test, TestingModule } from '@nestjs/testing';
import { ScormOrganizationService } from './scorm-organization.service';

describe('ScormOrganizationService', () => {
  let service: ScormOrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScormOrganizationService],
    }).compile();

    service = module.get<ScormOrganizationService>(ScormOrganizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
