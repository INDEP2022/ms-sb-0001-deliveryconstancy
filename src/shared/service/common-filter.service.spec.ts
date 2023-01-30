import { Test, TestingModule } from '@nestjs/testing';
import { CommonFilterService } from './common-filter.service';

describe('CommonFilterService', () => {
  let service: CommonFilterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonFilterService],
    }).compile();

    service = module.get<CommonFilterService>(CommonFilterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
