import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, HeaderComponent, FooterComponent, AboutComponent,RouterOutlet, RouterModule],
  // templateUrl: './app.component.html',
  template: `
  <app-header/>
  <div class="container mb-3">
    <router-outlet></router-outlet>
  </div>  
  <app-footer />
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cocodi';
}
