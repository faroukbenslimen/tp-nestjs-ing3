import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TravelService {
  constructor(private readonly config: ConfigService) {}

  getTravelName(): string {
    return this.config.get<string>('APP_NAME', 'hi!');
  }
}
