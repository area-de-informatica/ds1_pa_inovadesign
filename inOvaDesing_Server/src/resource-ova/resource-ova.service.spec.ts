import { Test, TestingModule } from '@nestjs/testing';
import { ResourceOvaService } from './resource-ova.service';

describe('ResourceOvaService', () => {
  let service: ResourceOvaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceOvaService],
    }).compile();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
    service = module.get<ResourceOvaService>(ResourceOvaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
