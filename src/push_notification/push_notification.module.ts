import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PushNotificationController } from './push_notification.controller';
import { PushNotificationService } from './push_notification.service';

@Module({
  imports: [AuthModule],
  controllers: [PushNotificationController],
  providers: [PushNotificationService],
})
export class PushNotificationModule {}
