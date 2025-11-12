import { Module } from '@nestjs/common';
import { DesignPhaseService } from './design-phase.service';
import { DesignPhaseController } from './design-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DesignPhase, DesignPhaseSchema } from './schemas/design-phase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DesignPhase.name, schema: DesignPhaseSchema },
    ]),
  ],
  controllers: [DesignPhaseController],
  providers: [DesignPhaseService],
})
export class DesignPhaseModule {}
