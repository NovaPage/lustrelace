import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ImageCompressionComponent } from './image-compression/image-compression.component'; // Importa el componente de compresión de imágenes

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TestComponent, ImageCompressionComponent] // Importa ambos componentes aquí
})
export class AppComponent {
  title = 'lustrelace';
}
