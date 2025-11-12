import { Test, TestingModule } from '@nestjs/testing';
import { ScormPackageService } from './scorm-package.service';

describe('ScormPackageService', () => {
  let service: ScormPackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScormPackageService],
    }).compile();

    service = module.get<ScormPackageService>(ScormPackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
