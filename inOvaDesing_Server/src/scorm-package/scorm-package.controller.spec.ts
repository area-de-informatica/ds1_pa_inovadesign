import { Test, TestingModule } from '@nestjs/testing';
import { ScormPackageController } from './scorm-package.controller';
import { ScormPackageService } from './scorm-package.service';

describe('ScormPackageController', () => {
  let controller: ScormPackageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScormPackageController],
      providers: [ScormPackageService],
    }).compile();

    controller = module.get<ScormPackageController>(ScormPackageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
