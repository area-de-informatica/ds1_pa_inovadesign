import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OvaDocument = HydratedDocument<Ova>;

@Schema({ timestamps: true })
export class Ova {
  @Prop()
  idOva: string | number;

  @Prop()
  title: string;

  @Prop()
  descript: string;

  @Prop()
  createDate: Date;

  @Prop()
  state: boolean;
}

export const OvaShema = SchemaFactory.createForClass(Ova);
