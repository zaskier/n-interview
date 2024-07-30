import { Cat } from './entities/cat.entity'
import { HairLengthStrategy } from './interfaces/cat.interface'

export class SiberianHairLengthStrategy implements HairLengthStrategy {
  changeFurLength(cat: Cat): Cat {
    cat.hairLengthMM = 0.2
    return cat
  }
}

export class SiameseHairLengthStrategy implements HairLengthStrategy {
  changeFurLength(cat: Cat): Cat {
    cat.hairLengthMM = 0.5
    return cat
  }
}

export class MaineCoonHairLengthStrategy implements HairLengthStrategy {
  changeFurLength(cat: Cat): Cat {
    cat.hairLengthMM = 0.4
    return cat
  }
}
