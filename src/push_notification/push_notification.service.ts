import { Injectable } from '@nestjs/common';
import { PushNotificationDto } from './dto/push_notification.dto';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../push-notification-google-service.json';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class PushNotificationService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  }

  async sendPushNotification(pushNotificationDto: PushNotificationDto) {
    const { token, title, body } = pushNotificationDto;
    const message = {
      notification: {
        title,
        body,
      },
    };
    return await admin.messaging().sendToDevice(token, message);
  }
}
