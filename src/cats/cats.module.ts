import { Module } from '@nestjs/common';
import { CatsRepo } from './cats.repo';

@Module({
  providers: [CatsRepo],
})
export class CatsModule {}
