interface ChatUser {
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat-page',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss',
})
export class ChatPageComponent {
  constructor() {}

  searchControl = new FormControl();

  currentUser: ChatUser = {
    name: 'ابراهيم الدسوقى',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    isOnline: true,
  };

  user: ChatUser = {
    name: 'دكتور محمد',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    isOnline: false,
    lastSeen: 'منذ 2 د',
  };

  messages: Message[] = [
    {
      text: 'مرحبا دكتور محمد',
      isUser: true,
      timestamp: '10:30 AM',
    },
    {
      text: 'مرحبا ابراهيم',
      isUser: false,
      timestamp: '10:31 AM',
    },
  ];

  recentChats: ChatUser[] = Array(6)
    .fill(null)
    .map((_, i) => ({
      name: 'ابراهيم الدسوقى',
      avatar: `https://randomuser.me/api/portraits/men/${i + 3}.jpg`,
      isOnline: Math.random() > 0.5,
      lastSeen: '2 د',
    }));

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
      this.newMessage = '';
    }
  }
}
