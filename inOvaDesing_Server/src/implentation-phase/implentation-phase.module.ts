import { Module } from '@nestjs/common';
import { ImplentationPhaseService } from './implentation-phase.service';
import { ImplentationPhaseController } from './implentation-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ImplementationPhase,
  ImplementationPhaseSchema,
} from './schemas/implementation-phase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ImplementationPhase.name, schema: ImplementationPhaseSchema },
    ]),
  ],
  controllers: [ImplentationPhaseController],
  providers: [ImplentationPhaseService],
})
export class ImplentationPhaseModule {}
