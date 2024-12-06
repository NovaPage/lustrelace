import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  standalone: true,
  selector: 'app-image-compression',
  templateUrl: './image-compression.component.html',
  styleUrls: ['./image-compression.component.scss'],
  providers: [NgxImageCompressService]
})
export class ImageCompressionComponent {
  constructor(private imageCompress: NgxImageCompressService) {
    console.log('ImageCompressionComponent initialized'); // Mensaje de consola
  }

  compressFile() {
    console.log('Compress file method called'); // Mensaje de consola
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      console.log('Image uploaded'); // Mensaje de consola
      this.imageCompress.compressFile(image, orientation, 50, 50).then(compressedImage => {
        console.log('Compressed image size:', this.imageCompress.byteCount(compressedImage)); // Mensaje de consola
      });
    });
  }
}
