import { Module } from '@nestjs/common';
import { InstructorEvalService } from './instructor-eval.service';
import { InstructorEvalController } from './instructor-eval.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InstructorEvaluation,
  InstructorEvaluationSchema,
} from './schemas/instructor-eval.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InstructorEvaluation.name, schema: InstructorEvaluationSchema },
    ]),
  ],
  controllers: [InstructorEvalController],
  providers: [InstructorEvalService],
})
export class InstructorEvalModule {}
