import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PushNotificationService } from './push_notification.service';
import { PushNotificationDto } from './dto/push_notification.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('push_notification')
export class PushNotificationController {
  constructor(
    private readonly pushNotificationService: PushNotificationService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  async sendPushNotification(@Body() pushNotificationDto: PushNotificationDto) {
    return await this.pushNotificationService.sendPushNotification(
      pushNotificationDto,
    );
  }
}
