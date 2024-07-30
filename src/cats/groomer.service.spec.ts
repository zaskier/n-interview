// groomer.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing'
import { GromerService } from './groomer.service'
import { Breed, Cat } from './entities/cat.entity'

describe('GromerService', () => {
  let service: GromerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GromerService],
    }).compile()

    service = module.get<GromerService>(GromerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should correctly calculate fur length for different cat breeds', () => {
    let siamese: Cat = new Cat(6, 'Cinamon', Breed.SIAMESE)
    let maineCon: Cat = new Cat(7, 'Chili', Breed.MAINE_COON)
    let siberian: Cat = new Cat(8, 'Imbir', Breed.SIBERIAN)

    expect(service.changeFurLength(siamese).hairLengthMM).not.toBe(1)
    expect(service.changeFurLength(siamese).hairLengthMM).toBe(0.5)
    expect(service.changeFurLength(maineCon).hairLengthMM).toBe(0.4)
    expect(service.changeFurLength(siberian).hairLengthMM).toBe(0.2)
  })
})
