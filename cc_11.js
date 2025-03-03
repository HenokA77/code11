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
  