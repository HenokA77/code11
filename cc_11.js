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
  
  