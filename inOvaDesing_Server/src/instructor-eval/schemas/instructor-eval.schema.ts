import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InstructorEvaluationDocument =
  HydratedDocument<InstructorEvaluation>;

@Schema({ timestamps: true })
export class InstructorEvaluation {
  @Prop()
  idEvaluation: string;

  @Prop()
  idOVA: string;

  @Prop()
  idUser: string;

  @Prop()
  idTeacher: string;

  @Prop()
  state: string;

  @Prop()
  observations: string;

  @Prop()
  date: Date;
}

export const InstructorEvaluationSchema =
  SchemaFactory.createForClass(InstructorEvaluation);
