import { Test, TestingModule } from '@nestjs/testing';
import { LomMetadataService } from './lom-metadata.service';

describe('LomMetadataService', () => {
  let service: LomMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LomMetadataService],
    }).compile();

    service = module.get<LomMetadataService>(LomMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
