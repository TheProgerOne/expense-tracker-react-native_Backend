import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();
@Module({
  imports: [
        UserModule, 
        TypeOrmModule.forRoot(ormConfig), 
         ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
