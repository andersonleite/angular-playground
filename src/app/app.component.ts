import { Component } from '@angular/core';
import { ThreadsService } from './chat/thread/threads.service';
import { MessagesService } from './chat/message/messages.service';
import { UsersService } from './chat/user/users.service';
import { ChatExampleData } from './chat/data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
