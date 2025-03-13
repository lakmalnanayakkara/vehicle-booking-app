import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  standalone: false,
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
})
export class ImageUploadComponent implements OnInit {
  selectedFile?: File;
  selectedFileName: string;
  progressInfos: any;
  message: string;
  imageInfos?: Observable<any>;
  preview: string;

  @Output() imageSelected = new EventEmitter<File>();

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }

  // selectFiles(event: any): void {
  //   console.log(this.selectedFiles && this.selectedFiles[0]);

  //   if (this.selectedFiles && this.selectedFiles[0]) {
  //     const numberOfFiles = this.selectedFiles.length;
  //     for (let i = 0; i < numberOfFiles; i++) {
  //       const reader = new FileReader();

  //       reader.onload = (e: any) => {
  //         this.previews.push(e.target.result);
  //       };

  //       reader.readAsDataURL(this.selectedFiles[i]);

  //       this.selectedFileNames.push(this.selectedFiles[i].name);
  //     }
  //   }
  //   console.log(this.selectedFiles);
  // }

  selectFiles(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.imageSelected.emit(this.selectedFile); // Emit the file to the parent component

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message = msg;
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message = msg;
        }
      );
    }
  }

  uploadFiles() {}
}
