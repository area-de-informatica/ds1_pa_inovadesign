import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SCODocument = HydratedDocument<SCO>;

@Schema({ timestamps: true })
export class SCO {
  @Prop()
  idSCO: string;

  @Prop()
  idOrganization: string;

  @Prop()
  title: string;

  @Prop()
  launchUrl: string;

  @Prop()
  masteryScore: number;
}

export const SCOSchema = SchemaFactory.createForClass(SCO);
