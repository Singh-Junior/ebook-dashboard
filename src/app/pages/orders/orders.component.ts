import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../books.data';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  ownedBooks: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';
  sortOption: string = '';
  noBooksFoundMessage: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadOrders(); // Load orders when the component initializes
  }

  loadOrders(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const ordersKey = `${currentUser.email}-orders`;
    const orders = JSON.parse(localStorage.getItem(ordersKey) || '[]');

    this.ownedBooks = orders;
    this.filteredBooks = [...this.ownedBooks]; // Initially show all books

    this.filterBooks(); // Apply filtering
    this.applySorting(); // Apply sorting
    this.paginateBooks(); // Apply pagination
  }

  filterBooks(): void {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.filteredBooks = [...this.ownedBooks]; // No filter, show all books
    } else {
      this.filteredBooks = this.ownedBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term)
      );
    }

    if (this.filteredBooks.length === 0) {
      this.noBooksFoundMessage = 'No books found matching your search...';
    } else {
      this.noBooksFoundMessage = '';
    }

    this.paginateBooks(); // Reapply pagination after filtering
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

    this.paginateBooks(); // Reapply pagination after sorting
  }

  paginateBooks(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.filteredBooks = this.filteredBooks.slice(startIndex, endIndex);
  }

  // This method will allow the user to search
  onSearchChange(): void {
    this.filterBooks();
    this.applySorting(); // Ensure sorting is applied after filtering
  }

  // This method will allow the user to change sorting
  onSortChange(): void {
    this.applySorting();
  }

  // Pagination controls
  nextPage(): void {
    const totalPages = Math.ceil(this.ownedBooks.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.paginateBooks();
    }
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateBooks();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateBooks();
    }
  }

  viewBook(book: Book): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const ordersKey = `${currentUser.email}-orders`;
    const storedBooks = JSON.parse(localStorage.getItem(ordersKey) || '[]');

    const selectedBook = storedBooks.find((storedBook: Book) => storedBook.title === book.title);

  if (selectedBook) {
    this.router.navigate(['/dashboardpage/library'], { queryParams: { bookId: selectedBook.id } });
  } else {
    console.log('Book not found in the stored orders');
  }
  }

  // Get the total number of pages
  get totalPages(): number {
    return Math.ceil(this.ownedBooks.length / this.itemsPerPage);
  }
}
