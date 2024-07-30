import { Cat } from '../entities/cat.entity'

export interface HairLengthStrategy {
  changeFurLength(cat: Cat): Cat
}
