import { Module } from '@nestjs/common';
import { ImplentationPhaseController } from './implentation-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ImplementationPhase,
  ImplementationPhaseSchema,
} from './schemas/implementation-phase.schema';
import { ImplementationPhaseService } from './implentation-phase.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ImplementationPhase.name, schema: ImplementationPhaseSchema },
    ]),
  ],
  controllers: [ImplentationPhaseController],
  providers: [ImplementationPhaseService],
  exports: [ImplementationPhaseService],
})
export class ImplentationPhaseModule {}
