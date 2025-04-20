// src/app/data/books.data.ts

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  coverImage: string;
}

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    price: 299,
    coverImage: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    price: 349,
    coverImage: 'https://picsum.photos/200/300?random=2'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    price: 279,
    coverImage: 'https://picsum.photos/200/300?random=3'
  },
  {
    id: 4,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    price: 399,
    coverImage: 'https://picsum.photos/200/300?random=4'
  },
  {
    id: 5,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    price: 499,
    coverImage: 'https://picsum.photos/200/300?random=5'
  },
  {
    id: 6,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Adventure',
    price: 259,
    coverImage: 'https://picsum.photos/200/300?random=6'
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    price: 289,
    coverImage: 'https://picsum.photos/200/300?random=7'
  },
  {
    id: 8,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    price: 269,
    coverImage: 'https://picsum.photos/200/300?random=8'
  },
  {
    id: 9,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    price: 349,
    coverImage: 'https://picsum.photos/200/300?random=9'
  },
  {
    id: 10,
    title: 'Inferno',
    author: 'Dan Brown',
    genre: 'Thriller',
    price: 369,
    coverImage: 'https://picsum.photos/200/300?random=10'
  },
  {
    id: 11,
    title: 'The Shining',
    author: 'Stephen King',
    genre: 'Horror',
    price: 329,
    coverImage: 'https://picsum.photos/200/300?random=11'
  },
  {
    id: 12,
    title: 'It',
    author: 'Stephen King',
    genre: 'Horror',
    price: 379,
    coverImage: 'https://picsum.photos/200/300?random=12'
  },
  {
    id: 13,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    price: 449,
    coverImage: 'https://picsum.photos/200/300?random=13'
  },
  {
    id: 14,
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    genre: 'History',
    price: 499,
    coverImage: 'https://picsum.photos/200/300?random=14'
  },
  {
    id: 15,
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    price: 479,
    coverImage: 'https://picsum.photos/200/300?random=15'
  },
  {
    id: 16,
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    price: 429,
    coverImage: 'https://picsum.photos/200/300?random=16'
  },
  {
    id: 17,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    price: 399,
    coverImage: 'https://picsum.photos/200/300?random=17'
  },
  {
    id: 18,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    price: 349,
    coverImage: 'https://picsum.photos/200/300?random=18'
  },
  {
    id: 19,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: 'Finance',
    price: 299,
    coverImage: 'https://picsum.photos/200/300?random=19'
  },
  {
    id: 20,
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    genre: 'Finance',
    price: 579,
    coverImage: 'https://picsum.photos/200/300?random=20'
  },
  {
    id: 21,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    genre: 'Biography',
    price: 599,
    coverImage: 'https://picsum.photos/200/300?random=21'
  },
  {
    id: 22,
    title: 'Zero to One',
    author: 'Peter Thiel',
    genre: 'Business',
    price: 399,
    coverImage: 'https://picsum.photos/200/300?random=22'
  },
  {
    id: 23,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    price: 369,
    coverImage: 'https://picsum.photos/200/300?random=23'
  },
  {
    id: 24,
    title: 'Rework',
    author: 'Jason Fried',
    genre: 'Business',
    price: 329,
    coverImage: 'https://picsum.photos/200/300?random=24'
  },
  {
    id: 25,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    genre: 'Spirituality',
    price: 299,
    coverImage: 'https://picsum.photos/200/300?random=25'
  },
  {
    id: 26,
    title: 'A New Earth',
    author: 'Eckhart Tolle',
    genre: 'Spirituality',
    price: 349,
    coverImage: 'https://picsum.photos/200/300?random=26'
  },
  {
    id: 27,
    title: 'Ikigai',
    author: 'Francesc Miralles',
    genre: 'Self-help',
    price: 279,
    coverImage: 'https://picsum.photos/200/300?random=27'
  },
  {
    id: 28,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    genre: 'Self-help',
    price: 319,
    coverImage: 'https://picsum.photos/200/300?random=28'
  },
  {
    id: 29,
    title: 'Can’t Hurt Me',
    author: 'David Goggins',
    genre: 'Motivational',
    price: 369,
    coverImage: 'https://picsum.photos/200/300?random=29'
  },
  {
    id: 30,
    title: 'Born a Crime',
    author: 'Trevor Noah',
    genre: 'Memoir',
    price: 289,
    coverImage: 'https://picsum.photos/200/300?random=30'
  },
  {
    id: 31,
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Historical Fiction',
    price: 329,
    coverImage: 'https://picsum.photos/200/300?random=31'
  },
  {
    id: 32,
    title: 'The Fault in Our Stars',
    author: 'John Green',
    genre: 'Romance',
    price: 279,
    coverImage: 'https://picsum.photos/200/300?random=32'
  },
  {
    id: 33,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fantasy',
    price: 349,
    coverImage: 'https://picsum.photos/200/300?random=33'
  },
  {
    id: 34,
    title: 'Verity',
    author: 'Colleen Hoover',
    genre: 'Thriller',
    price: 299,
    coverImage: 'https://picsum.photos/200/300?random=34'
  },
  {
    id: 35,
    title: 'Ugly Love',
    author: 'Colleen Hoover',
    genre: 'Romance',
    price: 279,
    coverImage: 'https://picsum.photos/200/300?random=35'
  },
  {
    id: 36,
    title: 'Reminders of Him',
    author: 'Colleen Hoover',
    genre: 'Romance',
    price: 259,
    coverImage: 'https://picsum.photos/200/300?random=36'
  },
  {
    id: 37,
    title: 'November 9',
    author: 'Colleen Hoover',
    genre: 'Romance',
    price: 289,
    coverImage: 'https://picsum.photos/200/300?random=37'
  },
  {
    id: 38,
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    genre: 'Romance',
    price: 319,
    coverImage: 'https://picsum.photos/200/300?random=38'
  },
  {
    id: 39,
    title: 'It Starts With Us',
    author: 'Colleen Hoover',
    genre: 'Romance',
    price: 329,
    coverImage: 'https://picsum.photos/200/300?random=39'
  },
  {
    id: 40,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Psychological Thriller',
    price: 379,
    coverImage: 'https://picsum.photos/200/300?random=40'
  }
];
