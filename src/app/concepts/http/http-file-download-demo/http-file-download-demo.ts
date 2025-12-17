import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-file-download-demo',
  imports: [],
  templateUrl: './http-file-download-demo.html',
  styleUrl: './http-file-download-demo.scss',
})
export class HttpFileDownloadDemo {
  constructor(private http: HttpClient) {}

  downloadFile() {
    this.http
      .get('https://httpbin.org/image/png', {
        responseType: 'blob'
      })
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample.png';
        a.click();

        window.URL.revokeObjectURL(url);
      });
  }
  /**
 * FILE DOWNLOAD NOTES
 * -------------------------------------------
 * - Use responseType: 'blob'
 * - Blob represents binary data
 * - Create object URL for download
 *
 * Common use cases:
 * - Reports (PDF, Excel)
 * - Images
 * - Export data
 */

}
