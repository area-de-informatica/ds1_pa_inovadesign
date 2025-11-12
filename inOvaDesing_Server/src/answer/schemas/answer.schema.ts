import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Prop()
  idAnswer: string;

  @Prop()
  idQuestion: string;

  @Prop()
  idUser: string;

  @Prop()
  textValue: string;

  @Prop()
  date: Date;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
