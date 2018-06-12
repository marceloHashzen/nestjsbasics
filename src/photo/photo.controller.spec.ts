import { Test, TestingModule } from '@nestjs/testing';
import { PhotoController } from './photo.controller';

describe('Photo Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PhotoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PhotoController = module.get<PhotoController>(PhotoController);
    expect(controller).toBeDefined();
  });
});
