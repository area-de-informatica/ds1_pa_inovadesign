import { Module } from '@nestjs/common';
import { UserProgressService } from './user-progress.service';
import { UserProgressController } from './user-progress.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserProgress,
  UserProgressSchema,
} from './schemas/user-progress.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserProgress.name, schema: UserProgressSchema },
    ]),
  ],
  controllers: [UserProgressController],
  providers: [UserProgressService],
})
export class UserProgressModule {}
