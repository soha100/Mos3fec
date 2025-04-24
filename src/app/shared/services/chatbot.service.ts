import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private baseUrl = 'https://ai-medical-assistant-production.up.railway.app';

  constructor(private http: HttpClient) {}

  newChat(chat_name: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    return this.http.post(
      `${this.baseUrl}/chat/new`,
      {
        chat_name,
      },
      { headers }
    );
  }

  ask(question: string, thread_id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    return this.http.post(
      `${this.baseUrl}/ask`,
      {
        question,
        thread_id,
      },
      { headers }
    );
  }

  deleteChat(thread_id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    const body = { thread_id }; // إضافة الـ thread_id في الجسم
    return this.http.request('DELETE', `${this.baseUrl}/chat`, {
      headers,
      body,
    });
  }

  deleteAllChats(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    return this.http.delete(`${this.baseUrl}/chats`, { headers });
  }

  getAllChats(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    return this.http.get(`${this.baseUrl}/chats`, { headers });
  }

  getMessages(thread_id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    const body = { thread_id }; // تضمين thread_id في الجسم
    return this.http.post(`${this.baseUrl}/chat`, body, { headers });
  }
}
