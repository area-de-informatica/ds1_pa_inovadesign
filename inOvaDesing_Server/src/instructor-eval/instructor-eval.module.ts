import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorEvalController } from './instructor-eval.controller';
import { InstructorEvaluationService } from './instructor-eval.service';
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
  providers: [InstructorEvaluationService],
  exports: [InstructorEvaluationService],
})
export class InstructorEvalModule {}
