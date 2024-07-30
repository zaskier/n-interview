import { Injectable } from '@nestjs/common'
import { Breed, Cat } from './entities/cat.entity'
import { MaineCoonHairLengthStrategy, SiameseHairLengthStrategy, SiberianHairLengthStrategy } from './cats.strategy'
import { HairLengthStrategy } from './interfaces/cat.interface'
@Injectable()
export class GromerService {
  private strategies: Record<Breed, HairLengthStrategy> = {
    [Breed.SIBERIAN]: new SiberianHairLengthStrategy(),
    [Breed.SIAMESE]: new SiameseHairLengthStrategy(),
    [Breed.MAINE_COON]: new MaineCoonHairLengthStrategy(),
  }

  changeFurLength(cat: Cat): Cat {
    const strategy = this.strategies[cat.breed]
    if (!strategy) {
      throw new Error('Invalid cat breed')
    }
    return strategy.changeFurLength(cat)
  }
}
