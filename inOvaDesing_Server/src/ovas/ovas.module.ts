import { Module } from '@nestjs/common';
import { OvasService } from './ovas.service';
import { OvasController } from './ovas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ova, OvaShema } from './schemas/ova.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ova.name, schema: OvaShema }])],
  controllers: [OvasController],
  providers: [OvasService],
})
export class OvasModule {}
