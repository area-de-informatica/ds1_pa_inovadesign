import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LomMetadataDocument = HydratedDocument<LomMetadata>;

@Schema({ timestamps: true })
export class LomMetadata {
  @Prop()
  idMetadata: string;

  @Prop()
  ownerType: string;

  @Prop()
  ownerId: string;

  @Prop({ type: Object })
  lomJSON: Record<string, any>;
}

export const LomMetadataSchema = SchemaFactory.createForClass(LomMetadata);
