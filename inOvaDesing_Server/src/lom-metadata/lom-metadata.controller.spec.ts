import { Test, TestingModule } from '@nestjs/testing';
import { LomMetadataController } from './lom-metadata.controller';
import { LomMetadataService } from './lom-metadata.service';

describe('LomMetadataController', () => {
  let controller: LomMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LomMetadataController],
      providers: [LomMetadataService],
    }).compile();

    controller = module.get<LomMetadataController>(LomMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
