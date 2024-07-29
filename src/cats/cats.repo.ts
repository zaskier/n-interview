import { Injectable, Scope } from '@nestjs/common';
import { Breed, Cat } from './entities/cat.entity';

const ALL_CATS = [
  new Cat(1, 'Pempek', Breed.SIBERIAN),
  new Cat(2, 'Killer', Breed.SIAMESE),
  new Cat(3, 'Boorczek', Breed.MAINE_COON),
  new Cat(4, 'Janusz', Breed.SIAMESE),
  new Cat(5, 'Bober', Breed.SIBERIAN),
];

// Why this scope?
@Injectable({ scope: Scope.DEFAULT })
export class CatsRepo {
  // Why like this?
  private cats: Cat[] = JSON.parse(JSON.stringify(ALL_CATS));

  getAll(): Cat[] {
    return this.cats;
  }

  getById(id: number): Cat | null {
    return this.cats.find((c) => c.id === id);
  }
}
