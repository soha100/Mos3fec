import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../../shared/services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss',
})
export class AiChatComponent implements OnInit {
  [x: string]: any;
  newChatName = '';
  chats: any[] = [];
  selectedThreadId: string | null = null;
  messages: any[] = [];
  question = '';
  showNewChatInput = false;
  isLoading = true;
  constructor(private _ChatbotService: ChatbotService) {}

  ngOnInit() {
    this.loadChats();
  }

  // loadChats() {
  //   this._ChatbotService.getAllChats().subscribe((res: any) => {
  //     this.chats = res.chats || [];
  //   });
  // }
  loadChats() {
    this._ChatbotService.getAllChats().subscribe({
      next: (res: any) => {
        console.log('RESPONSE:', res);
        this.chats = res.chats || [];
      },
      error: (err) => {
        console.error('Chat Load Error:', err);
      },
    });
  }

  createChat() {
    if (!this.newChatName.trim()) return;
    this.isLoading = true; // بدء التحميل
    this._ChatbotService.newChat(this.newChatName).subscribe({
      next: (res: any) => {
        this.selectedThreadId = res.thread_id;
        this.messages = [];
        this.loadChats(); // تحديث القائمة
        this.isLoading = false; // إنهاء التحميل
        this.newChatName = '';
        this.showNewChatInput = false;
        this['router'].navigate(['/chat', res.thread_id]); // فتح صفحة جديدة
      },
      error: (err) => {
        console.error('Create Chat Error:', err);
        this.isLoading = false;
      },
    });
  }

  ask() {
    if (!this.selectedThreadId || !this.question) return;

    // Push the user's question into the messages array
    this.messages.push({ from: 'user', content: this.question });

    // Make the API call and push the bot's response
    this._ChatbotService.ask(this.question, this.selectedThreadId).subscribe({
      next: (res: any) => {
        this.messages.push({ from: 'bot', content: res.response }); // Ensure `content` is used consistently
      },
      error: (err) => {
        console.error('Error in Ask Response:', err);
      },
    });

    this.question = ''; // Clear the input field
  }

  deleteChat(thread_id: string) {
    this._ChatbotService.deleteChat(thread_id).subscribe(() => {
      if (this.selectedThreadId === thread_id) {
        this.selectedThreadId = null;
        this.messages = [];
      }
      this.loadChats();
    });
  }

  deleteAllChats() {
    this._ChatbotService.deleteAllChats().subscribe(() => {
      this.selectedThreadId = null;
      this.messages = [];
      this.chats = [];
    });
  }

  selectChat(chat: any) {
    this.selectedThreadId = chat.thread_id; // تحديد الـ thread_id الخاص بالشات
    this.messages = []; // مسح الرسائل الحالية
    this.isLoading = true; // عرض مؤشر التحميل

    // جلب التاريخ الخاص بالشات
    this._ChatbotService.getMessages(chat.thread_id).subscribe({
      next: (res: any) => {
        this.messages = res.history || []; // تحديث الرسائل بالـ History
        this.isLoading = false; // إنهاء التحميل
      },
      error: (err) => {
        console.error('Error loading chat history:', err);
        this.isLoading = false; // إنهاء التحميل حتى لو حدث خطأ
      },
    });
  }
}
