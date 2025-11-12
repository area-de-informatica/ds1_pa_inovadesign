import { Test, TestingModule } from '@nestjs/testing';
import { ResourceOvaService } from './resource-ova.service';

describe('ResourceOvaService', () => {
  let service: ResourceOvaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceOvaService],
    }).compile();

    service = module.get<ResourceOvaService>(ResourceOvaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
