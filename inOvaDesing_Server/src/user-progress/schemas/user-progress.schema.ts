import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserProgressDocument = HydratedDocument<UserProgress>;

@Schema({ timestamps: true })
export class UserProgress {
  @Prop()
  idProgress: string;

  @Prop()
  idOVA: string;

  @Prop()
  idUser: string;

  @Prop()
  phase: string;

  @Prop()
  percentage: number;

  @Prop()
  updateDate: Date;
}

export const UserProgressSchema = SchemaFactory.createForClass(UserProgress);
