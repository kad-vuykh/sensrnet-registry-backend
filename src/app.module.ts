import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QueryModule } from './query/query.module';
import { CommandModule } from './command/command.module';
import { CheckpointModule } from './query/service/checkpoint/checkpoint.module';
import { HealthController } from './health/health.controller';

const port = process.env.MONGO_PORT || 27017;
const host = process.env.MONGO_HOST || 'localhost';
const database = process.env.MONGO_DATABASE || 'sensrnet';

@Module({
    imports: [
        AuthModule,
        UserModule,
        QueryModule,
        CommandModule,
        CheckpointModule,
        MongooseModule.forRoot(`mongodb://${host}:${port}/${database}`),
        TerminusModule,
    ],
    controllers: [HealthController],
})

export class AppModule {}
