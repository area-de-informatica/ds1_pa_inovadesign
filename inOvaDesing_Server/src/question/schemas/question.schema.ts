import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop()
  idQuestion: string;

  @Prop()
  idForm: string;

  @Prop()
  type: string;

  @Prop()
  statement: string;

  @Prop()
  required: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
