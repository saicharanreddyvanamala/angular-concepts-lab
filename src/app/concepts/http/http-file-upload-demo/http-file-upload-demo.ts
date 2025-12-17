import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-file-upload-demo',
  imports: [],
  templateUrl: './http-file-upload-demo.html',
  styleUrl: './http-file-upload-demo.scss',
})
export class HttpFileUploadDemo {
    selectedFile!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http
      .post('https://httpbin.org/post', formData)
      .subscribe(res => {
        console.log('Upload response:', res);
        alert('File uploaded successfully');
      });
  }

  /**
 * FILE UPLOAD NOTES
 * -------------------------------------------
 * - Use FormData for file uploads
 * - Do NOT JSON.stringify files
 * - Do NOT manually set Content-Type
 *
 * Steps:
 * 1. Get File from input
 * 2. Append to FormData
 * 3. POST using HttpClient
 *
 * Common use cases:
 * - Profile images
 * - Documents
 * - Attachments
 */

}
