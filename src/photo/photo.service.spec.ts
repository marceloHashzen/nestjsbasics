import { Test, TestingModule } from '@nestjs/testing';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let provider: PhotoService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoService],
    }).compile();
    provider = module.get<PhotoService>(PhotoService);
  });
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
