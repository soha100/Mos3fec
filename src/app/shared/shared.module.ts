import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './Components/layouts/layouts.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutsModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}
