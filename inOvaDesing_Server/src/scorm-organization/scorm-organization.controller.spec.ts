import { Test, TestingModule } from '@nestjs/testing';
import { ScormOrganizationController } from './scorm-organization.controller';
import { ScormOrganizationService } from './scorm-organization.service';

describe('ScormOrganizationController', () => {
  let controller: ScormOrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScormOrganizationController],
      providers: [ScormOrganizationService],
    }).compile();

    controller = module.get<ScormOrganizationController>(ScormOrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
