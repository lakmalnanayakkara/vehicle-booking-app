import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  type ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  standalone: false,
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
})
export class ImageUploadComponent {
  selectedFile?: File;
  selectedFileName: string;
  message: string;
  preview: string;

  @ViewChild('fileInput') fileInput!: ElementRef;

  @Output() imageSelected = new EventEmitter<File>();
  @Output() documentRemove = new EventEmitter<File>();

  selectFiles(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.selectedFileName = event.target.files[0].name;
      this.imageSelected.emit(this.selectedFile);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  removeDocument() {
    this.documentRemove.emit(this.selectedFile);
    this.selectedFile = undefined;
    this.preview = '';
    this.selectedFileName = '';
    this.message = '';
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }
}
