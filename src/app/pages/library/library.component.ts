import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  currentBook: any; // Assuming you have a book object to track the current book

  constructor(private cdRef: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the current user and retrieve their orders from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const ordersKey = `${currentUser.email}-orders`;
    const storedOrders = localStorage.getItem(ordersKey);


    this.route.queryParams.subscribe(params => {
      this.currentBook = parseInt(params['bookId'],10);
      console.log('Received Book ID:', this.currentBook);  // Log the bookId to check
    });

    if (storedOrders) {
      const orders = JSON.parse(storedOrders);
      const currentBook = orders.find((order: any) => order.id === this.currentBook);

      if (currentBook) {
        this.currentPage = currentBook.lastReadPage || 1; // Set the last read page or default to 1
        console.log('Last read page:', this.currentPage);  // Log the last read page
      }
    }


    // If orders exist, find the book and update the page number

  }

  // This is triggered when PDF is loaded completely
  afterLoadComplete(pdf: any): void {
    this.totalPages = pdf.numPages; // Access the total pages count from the loaded PDF
    console.log('PDF loaded:', pdf);
  }

  // Go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log('Current page:', this.currentPage);
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

  // Save the last read page before exiting the component
  ngOnDestroy(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const ordersKey = `${currentUser.email}-orders`;
    const storedOrders = localStorage.getItem(ordersKey);

    // If orders exist, update the last read page for the current book
    if (storedOrders) {
      const orders = JSON.parse(storedOrders);

      const bookIndex = orders.findIndex((order: any) => order.id === this.currentBook);
      if (bookIndex !== -1) {
        orders[bookIndex].lastReadPage = this.currentPage;
        localStorage.setItem(ordersKey, JSON.stringify(orders));
      }
      console.log('Updated last read page:', this.currentPage);
    }
  }
}
