# EbookDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




# Ebook Dashboard

This is an Angular-based ebook dashboard project that allows users to read books, track their progress, and manage their reading experience. The application offers functionalities like page navigation, reading mode, and order tracking with the ability to save the last read page of each book.

## Features

- View and read ebooks in PDF format.
- Track the current page of the ebook.
- Enter and exit reading mode (fullscreen and blackout).
- Navigation between pages (next/previous).
- Save the last read page in localStorage for continued reading.
- Order management (store book orders with the last read page).

## Requirements

- Angular 19
- TypeScript
- PDF.js (via `ng2-pdf-viewer`)
- LocalStorage for persistent data

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Singh-Junior/ebook-dashboard.git
Navigate to the project directory:

 
cd ebook-dashboard
Install the dependencies:

 
npm install
Serve the application locally:

 
ng serve
Open the application in your browser:

 
http://localhost:4200
File Structure
 
/src
  /app
    /pages
      /library
        library.component.ts        # Main component for displaying the PDF and reading features
        library.component.html       # Template for displaying the ebook and controls
        library.component.css        # Styles for the library component
    /assets
      /books
        defaultBook.pdf              # Example book to load and display
    /app.module.ts                   # Main module for the Angular application
    /app-routing.module.ts           # Application routing configuration
Important Components
LibraryComponent
This component is responsible for displaying the ebook, handling page navigation, and managing the reading mode.

ngOnInit: Initializes the component and loads the last read page from localStorage.

afterLoadComplete: Triggered after the PDF has loaded. Updates the total page count.

nextPage and prevPage: Methods to navigate between pages.

enterReadingMode and exitReadingMode: Toggle the fullscreen and blackout effects.

ngOnDestroy: Saves the last read page to localStorage when leaving the component.

OrdersComponent
Responsible for managing book orders and navigating to the selected book's library page. The bookId is sent to the LibraryComponent to fetch the specific book's details.

LocalStorage
The application uses localStorage to persist the following data:

currentUser: Stores information about the current user.

orders: Stores a list of book orders for the current user.

lastReadPage: Saves the last read page for each book to ensure continued reading.

Usage
Viewing a Book:

Click on any book in your library.

It will load the book in the PDF viewer with the current page stored in localStorage.

Navigation:

Use the "Previous" and "Next" buttons to navigate through the pages.

The current page is automatically saved when the component is destroyed.

Reading Mode:

Enter fullscreen mode with a blackout overlay by clicking "Enter Reading Mode".

Exit reading mode with the "Exit Reading Mode" button.

Notes
Ensure that the path to the PDF (/books/defaultBook.pdf) is correctly configured in the pdfSrc property of the LibraryComponent.

The application uses the ng2-pdf-viewer library to render PDF files. You can install it using npm install ng2-pdf-viewer.

License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet
Copy
Edit

### Key Updates:
- I've updated the clone URL to `https://github.com/Singh-Junior/ebook-dashboard.git` in the installation section.
- The rest of the `README.md` remains the same, providing a full overview of the project.

Let me know if you need anything else!
