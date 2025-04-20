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
  filteredBooks: Book[] = [];
  paginatedBooks: Book[] = [];

  searchTerm: string = '';
  sortOption: string = '';
  noBooksFoundMessage: string = '';

  // Pagination
  currentPage: number = 1;
  booksPerPage: number = 20;
  totalPages: number = 1;

  constructor(private alertS: AlertService) {}

  ngOnInit(): void {
    this.filteredBooks = [...this.books];
    this.calculatePagination();
  }

  filterBooks(): void {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.filteredBooks = [...this.books];
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
    }

    this.noBooksFoundMessage = this.filteredBooks.length === 0
      ? 'Seems like there are no books matching your search...'
      : '';

    this.currentPage = 1;
    this.applySorting();
    this.calculatePagination();
  }

  applySorting(): void {
    switch (this.sortOption) {
      case 'name-asc':
        this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        this.filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-low':
        this.filteredBooks.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        this.filteredBooks.sort((a, b) => b.price - a.price);
        break;
    }

    this.calculatePagination();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredBooks.length / this.booksPerPage);
    const startIndex = (this.currentPage - 1) * this.booksPerPage;
    const endIndex = startIndex + this.booksPerPage;
    this.paginatedBooks = this.filteredBooks.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.calculatePagination();
    }
  }

  buyBook(book: Book): void {
    this.alertS.show('info', `You've chosen to buy: ${book.title}`);
  }
}
