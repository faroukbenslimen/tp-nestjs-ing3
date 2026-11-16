import { Controller, Post } from '@nestjs/common';
import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  getTravelName(): string {
    return this.travelService.getTravelName();
  }
}
