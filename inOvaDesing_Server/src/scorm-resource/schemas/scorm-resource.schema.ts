import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScormResourceDocument = HydratedDocument<ScormResource>;

@Schema({ timestamps: true })
export class ScormResource {
  @Prop()
  idResource: string;

  @Prop()
  idManifest: string;

  @Prop()
  identifier: string;

  @Prop()
  href: string;

  @Prop({ type: [String] })
  files: string[];
}

export const ScormResourceSchema = SchemaFactory.createForClass(ScormResource);
