import { Test, TestingModule } from '@nestjs/testing';
import { ResourceOvaController } from './resource-ova.controller';
import { ResourceOvaService } from './resource-ova.service';

describe('ResourceOvaController', () => {
  let controller: ResourceOvaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceOvaController],
      providers: [ResourceOvaService],
    }).compile();

    controller = module.get<ResourceOvaController>(ResourceOvaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
