import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatListComponent } from './pages/chat/components/chat-list/chat-list.component';
import { ChatWindowComponent } from './pages/chat/components/chat-window/chat-window.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/chat/components/login/login.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdGetComponent } from './prod-get/prod-get.component';
import { ProdService } from './prod.service';
import { WebSocketService } from './web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatMessageComponent,
    ChatListComponent,
    ChatWindowComponent,
    ChatComponent,
    LoginComponent,
    ProdAddComponent,
    ProdEditComponent,
    ProdGetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WebSocketService, ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
