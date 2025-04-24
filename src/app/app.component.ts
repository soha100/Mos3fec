// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { SharedModule } from './shared/shared.module';
// import { initFlowbite } from 'flowbite';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, SharedModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent implements OnInit {
//   ngOnInit(): void {
//     initFlowbite();
//   }
//   title = 'Mos3efk';
// }

import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Mos3efk';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite(); // ✅ يتنفذ فقط في المتصفح
    }
  }
}
