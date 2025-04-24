import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-calender',
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalenderComponent {
  selected = model<Date | null>(null);
}
