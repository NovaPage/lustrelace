import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TestComponent] // Importa el TestComponent aquí
})
export class AppComponent {
  title = 'lustrelace';
}
