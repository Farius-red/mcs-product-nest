import { Module } from '@nestjs/common';
import { UtilResponses } from './utilResponses';

@Module({
  providers: [UtilResponses],
  exports: [UtilResponses],
})
export class UtilModule {}
