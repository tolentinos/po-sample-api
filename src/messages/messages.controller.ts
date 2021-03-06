import { Controller, Query, Body, Post } from '@nestjs/common';

import { MessagesService } from './messages.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {

  constructor(private readonly messagesService: MessagesService) { }

  @Post()
  async getMessages(@Query('status') status: string, @Body() message: object) {
    return this.messagesService.getMessages(status, message);
  }

}
