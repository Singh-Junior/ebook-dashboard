import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOKS, Book } from '../books.data';
import { AlertService } from '../../services/alert.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  books: Book[] = BOOKS;
  searchTerm: string = ''; // Bind to search input
  filteredBooks: Book[] = [];
  noBooksFoundMessage: string = '';

  constructor(private alertS: AlertService) {}

  ngOnInit(): void {
    this.filteredBooks = this.books; // Initially show all books
  }

  filterBooks(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = this.books; // Show all books when search term is empty
      this.noBooksFoundMessage = '';
    } else {
      this.filteredBooks = this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      if (this.filteredBooks.length === 0) {
        this.noBooksFoundMessage = 'Seems like there are no books matching your search...';
      } else {
        this.noBooksFoundMessage = ''; // Clear the message if books are found
      }
    }
  }

  buyBook(book: any): void {
    this.alertS.show('info', `You've chosen to buy: ${book.title}`);
  }
}
