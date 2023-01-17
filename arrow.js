const author={
    fullName:"Bob Alice",
    books: ['chars'],
    printBooks() {
        this.books.forEach(book => console.log(book + 'by ' +
        this.fullName));
        }
        
    
};
author.printBooks();
