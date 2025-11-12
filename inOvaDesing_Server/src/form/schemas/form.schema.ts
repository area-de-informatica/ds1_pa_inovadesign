import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FormDocument = HydratedDocument<Form>;

@Schema({ timestamps: true })
export class Form {
  @Prop()
  idForm: string;

  @Prop()
  phase: string;

  @Prop()
  idPhase: string;

  @Prop()
  title: string;

  @Prop()
  state: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
