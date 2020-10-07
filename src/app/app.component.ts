import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { ProdService } from './prod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebSocketService]
})
export class AppComponent implements OnInit {
  title = 'chatapp';
  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.newUserJoined()
    .subscribe(data=>this.messageArray.push(data));

    this.webSocketService.userLeftRoom()
    .subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit() {
    // here we want to listen to an event from the socket.io server
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    });
  }

  join() {
    this.webSocketService.joinRoom({user:this.user, room:this.room});
  }

  leave() {
    this.webSocketService.leaveRoom({user:this.user, room:this.room});
  }
} 
