import { Controller, Post, Body } from '@nestjs/common';
import { PushNotificationService } from './push_notification.service';
import { PushNotificationDto } from './dto/push_notification.dto';

@Controller('push_notification')
export class PushNotificationController {
  constructor(
    private readonly pushNotificationService: PushNotificationService,
  ) {}

  @Post()
  async sendPushNotification(@Body() pushNotificationDto: PushNotificationDto) {
    return await this.pushNotificationService.sendPushNotification(
      pushNotificationDto,
    );
  }
}
