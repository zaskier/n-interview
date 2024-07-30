import { Module } from '@nestjs/common'
import { CatsRepo } from './cats.repo'
import { GromerService } from './groomer.service'

@Module({
  providers: [CatsRepo, GromerService],
})
export class CatsModule {}
