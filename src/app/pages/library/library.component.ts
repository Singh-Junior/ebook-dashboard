import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule, PdfViewerModule],  // Import the PDF viewer module
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent | undefined;  // Reference to the PDF viewer component
  @ViewChild('pdfContainer') pdfContainer: ElementRef | undefined;

  pdfSrc: string = '/books/defaultBook.pdf'; // Path to the PDF file (ensure correct path)
  currentPage: number = 1;
  totalPages: number = 0;
  isInReadingMode: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}


   afterLoadComplete(pdf: any): void {
    this.totalPages = pdf.numPages; // Access the total pages count from the loaded PDF
    console.log('PDF loaded:', pdf);
  }

  // Go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.cdRef.detectChanges();
      console.log("REavhed here")
    }
  }

  // Go to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Enter reading mode (fullscreen and blackout)
  enterReadingMode(): void {
    this.isInReadingMode = true;
    document.body.style.overflow = 'hidden';
    document.documentElement.requestFullscreen();
    this.toggleBlackout(true);
  }

  // Exit reading mode (exit fullscreen and remove blackout)
  exitReadingMode(): void {
    this.isInReadingMode = false;
    document.body.style.overflow = 'auto';
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.toggleBlackout(false);
  }

  // Toggle the blackout overlay
  toggleBlackout(enable: boolean): void {
    if (enable) {
      const blackoutDiv = document.createElement('div');
      blackoutDiv.classList.add('blackout');
      document.body.appendChild(blackoutDiv);
    } else {
      const blackoutDiv = document.querySelector('.blackout');
      if (blackoutDiv) document.body.removeChild(blackoutDiv);
    }
  }
}
