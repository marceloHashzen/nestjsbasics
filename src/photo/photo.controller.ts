import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) { }

  @Get()
  getAllPhotos(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

}
