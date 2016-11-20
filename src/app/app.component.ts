import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/services/book.service';
import { Book } from './shared/models/book';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private books: Array<Book> = [];
    private book: Book = new Book();

    constructor(private bookService: BookService) {
    }

    ngOnInit(): void {
        this.bookService.search("").subscribe(
            books => this.books = books,
            error => console.log(error),
            () => console.log()
        );

        this.bookService.find("123123123").subscribe(
            book => this.book = book,
            error => console.log(error),
            () => {
                console.log(this.book);
                this.createNewBook(this.book);
            }
        );
    }

    createNewBook(b: Book): void {
        this.bookService.create(b).subscribe(
            book => this.book = book,
            error => console.log(error),
            () => console.log(this.book)
        );
    }

    title = 'app works!';

    currentPage: number = 3;

    viewPage(page: number) {
        this.currentPage = page;
        console.log("current page is : " + page);
    }

    nextPage() {
        console.log("next page");
    }

    previousPage() {
        console.log("previous page");
    }
}
