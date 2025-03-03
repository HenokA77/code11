// Task 1
class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  
    // Method to get book details
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies Available: ${this.copies}`;
    }
  
    // Method to update the number of copies
    updateCopies(quantity) {
      this.copies += quantity;
      return `Updated copies: ${this.copies}`;
    }
  }
  
  // Example usage:
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5);
  
  console.log(book1.getDetails()); // Output book details
  console.log(book1.updateCopies(-1)); // Borrowing a book (reducing copies)
  console.log(book1.updateCopies(2)); // Returning books (increasing copies)
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
  
  book1.updateCopies(-1);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

  // Task 2
class Borrower {
    constructor(name, borrowerId) {
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = [];
    }
  
    // Method to borrow a book
    borrowBook(book) {
      if (book.copies > 0) {
        this.borrowedBooks.push(book.title);
        book.updateCopies(-1); // Reduce book copies
        return `${this.name} borrowed "${book.title}".`;
      } else {
        return `Sorry, "${book.title}" is out of stock.`;
      }
    }
  
    // Method to return a book
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book.title);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.updateCopies(1); // Increase book copies
        return `${this.name} returned "${book.title}".`;
      } else {
        return `${this.name} did not borrow "${book.title}".`;
      }
    }
  }
  
  // Example usage:
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5);
  const borrower1 = new Borrower("John Doe", 101);
  
  console.log(borrower1.borrowBook(book1)); // Borrowing a book
  console.log(borrower1.borrowedBooks); // Checking borrowed books
  console.log(borrower1.returnBook(book1)); // Returning the book
  console.log(borrower1.borrowedBooks); // Checking borrowed books after return
  const borrower1 = new Borrower("Alice Johnson", 201);
  borrower1.borrowBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]
  
  borrower1.returnBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: []
  
  // Task 3
class Library {
    constructor() {
      this.books = [];
      this.borrowers = [];
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
      return `Book "${book.title}" added to the library.`;
    }
  
    // Method to list all books in the library
    listBooks() {
      if (this.books.length === 0) {
        console.log("No books available in the library.");
        return;
      }
      console.log("Books in the Library:");
      this.books.forEach(book => console.log(book.getDetails()));
    }
  }
  
  // Example usage:
  const library = new Library();
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 9780061120084, 3);
  
  console.log(library.addBook(book1)); // Adding books
  console.log(library.addBook(book2));
  
  library.listBooks(); // Listing all books
  const library = new Library();
  library.addBook(book1);
  library.listBooks();
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
  
  // Task 4
class Library {
    constructor() {
      this.books = [];
      this.borrowers = [];
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
      return `Book "${book.title}" added to the library.`;
    }
  
    // Method to list all books in the library
    listBooks() {
      if (this.books.length === 0) {
        console.log("No books available in the library.");
        return;
      }
      console.log("Books in the Library:");
      this.books.forEach(book => console.log(book.getDetails()));
    }
  
    // Method to add a new borrower
    addBorrower(borrower) {
      this.borrowers.push(borrower);
      return `Borrower "${borrower.name}" added to the library.`;
    }
  
    // Method to lend a book to a borrower
    lendBook(borrowerId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  
      if (!book) {
        return `Book with ISBN ${isbn} not found in the library.`;
      }
      if (!borrower) {
        return `Borrower with ID ${borrowerId} not found.`;
      }
      if (book.copies === 0) {
        return `Sorry, "${book.title}" is out of stock.`;
      }
  
      borrower.borrowBook(book);
      return `${borrower.name} borrowed "${book.title}".`;
    }
  }
  
  // Example usage:
  const library = new Library();
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 9780061120084, 3);
  const borrower1 = new Borrower("John Doe", 101);
  
  console.log(library.addBook(book1)); // Adding books
  console.log(library.addBook(book2));
  console.log(library.addBorrower(borrower1)); // Adding borrower
  
  console.log(library.lendBook(101, 9780743273565)); // Lending a book
  console.log(borrower1.borrowedBooks); // Checking borrowed books
  library.listBooks(); // Listing all books to see updated copies
  library.lendBook(201, 123456);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]
  
  // Task 5
class Library {
    constructor() {
      this.books = [];
      this.borrowers = [];
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
      return `Book "${book.title}" added to the library.`;
    }
  
    // Method to list all books in the library
    listBooks() {
      if (this.books.length === 0) {
        console.log("No books available in the library.");
        return;
      }
      console.log("Books in the Library:");
      this.books.forEach(book => console.log(book.getDetails()));
    }
  
    // Method to add a new borrower
    addBorrower(borrower) {
      this.borrowers.push(borrower);
      return `Borrower "${borrower.name}" added to the library.`;
    }
  
    // Method to lend a book to a borrower
    lendBook(borrowerId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  
      if (!book) {
        return `Book with ISBN ${isbn} not found in the library.`;
      }
      if (!borrower) {
        return `Borrower with ID ${borrowerId} not found.`;
      }
      if (book.copies === 0) {
        return `Sorry, "${book.title}" is out of stock.`;
      }
  
      borrower.borrowBook(book);
      return `${borrower.name} borrowed "${book.title}".`;
    }
  
    // Method to return a borrowed book
    returnBook(borrowerId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  
      if (!book) {
        return `Book with ISBN ${isbn} not found in the library.`;
      }
      if (!borrower) {
        return `Borrower with ID ${borrowerId} not found.`;
      }
      if (!borrower.borrowedBooks.includes(book.title)) {
        return `${borrower.name} did not borrow "${book.title}".`;
      }
  
      borrower.returnBook(book);
      return `${borrower.name} returned "${book.title}".`;
    }
  }
  
  // Example usage:
  const library = new Library();
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 9780061120084, 3);
  const borrower1 = new Borrower("John Doe", 101);
  
  console.log(library.addBook(book1)); // Adding books
  console.log(library.addBook(book2));
  console.log(library.addBorrower(borrower1)); // Adding borrower
  
  console.log(library.lendBook(101, 9780743273565)); // Lending a book
  console.log(borrower1.borrowedBooks); // Checking borrowed books
  
  console.log(library.returnBook(101, 9780743273565)); // Returning the book
  console.log(borrower1.borrowedBooks); // Checking borrowed books after return
  library.listBooks(); // Listing all books to see updated copies
  library.returnBook(201, 123456);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
  console.log(borrower1.borrowedBooks);
  // Expected output: []
  