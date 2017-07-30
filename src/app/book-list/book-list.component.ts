import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {SampleBookData} from '../../shared/data/bookdata';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private books: Array<Book>;

    selectedBook: Book;

    constructor() {
        this.selectedBook = new Book();
    }

    ngOnInit() {
        this.books = SampleBookData;
    }

    public getBooks(): Array<Book> {
        return this.books;
    }
}
