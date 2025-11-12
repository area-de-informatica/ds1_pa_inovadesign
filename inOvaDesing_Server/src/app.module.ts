import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OvasModule } from './ovas/ovas.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalysisPhaseModule } from './analysis-phase/analysis-phase.module';
import { DesignPhaseModule } from './design-phase/design-phase.module';
import { DevelopmentPhaseModule } from './development-phase/development-phase.module';
import { EvaluationPhaseModule } from './evaluation-phase/evaluation-phase.module';
import { FormModule } from './form/form.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { ResourceOvaModule } from './resource-ova/resource-ova.module';
import { InstructorEvalModule } from './instructor-eval/instructor-eval.module';
import { UserProgressModule } from './user-progress/user-progress.module';
import { ScormPackageModule } from './scorm-package/scorm-package.module';
import { ScormManifestModule } from './scorm-manifest/scorm-manifest.module';
import { ScormOrganizationModule } from './scorm-organization/scorm-organization.module';
import { ScoModule } from './sco/sco.module';
import { ScormResourceModule } from './scorm-resource/scorm-resource.module';
import { LomMetadataModule } from './lom-metadata/lom-metadata.module';
import { ImplentationPhaseModule } from './implentation-phase/implentation-phase.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://duberneybarreraortega_db_user:rv8nzxfm86mxzWYc@cluster0.pkgnfwu.mongodb.net/?appName=Cluster0',
    ),
    OvasModule,
    UsersModule,
    AnalysisPhaseModule,
    DesignPhaseModule,
    DevelopmentPhaseModule,
    EvaluationPhaseModule,
    FormModule,
    QuestionModule,
    AnswerModule,
    ResourceOvaModule,
    InstructorEvalModule,
    UserProgressModule,
    ScormPackageModule,
    ScormManifestModule,
    ScormOrganizationModule,
    ScoModule,
    ScormResourceModule,
    LomMetadataModule,
    ImplentationPhaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
