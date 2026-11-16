import { Injectable } from '@nestjs/common';
import { ConfigService} from '@nestjs/config';

interface Travel {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class AppService {
  constructor(private readonly config : ConfigService){}

  private readonly travels: Travel[] = [
    { id: 1, name: 'to china', price: 9000 },
    { id: 2, name: 'to morocco', price: 4000 },
    
  ];

  getAppName():string{
    return this.config.get<string>('APP_NAME','hi!');
  }

  getTravels(): Travel[] {
    return [...this.travels];
  }

  findAll(): Travel[] {
    return this.getTravels();
  }
}
