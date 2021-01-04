import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product} from './product';

export class AppData implements InMemoryDbService
{
  createDb()
  {
    let products: Product[] = [
      {
        id: 1,
        price: 19.95,
        name: 'iphone'
      },
      {
        id: 2,
        price: 32.99,
        name: 'samsung'
      },
      {
        id: 3,
        price: 20.55,
        name: 'htc'
      },
    ];
    return {products};
  }
}
