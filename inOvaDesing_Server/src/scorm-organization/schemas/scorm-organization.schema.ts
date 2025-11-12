import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScormOrganizationDocument = HydratedDocument<ScormOrganization>;

@Schema({ timestamps: true })
export class ScormOrganization {
  @Prop()
  idOrganization: string;

  @Prop()
  idManifest: string;

  @Prop()
  title: string;

  @Prop({ type: [String] })
  items: string[];
}

export const ScormOrganizationSchema =
  SchemaFactory.createForClass(ScormOrganization);
