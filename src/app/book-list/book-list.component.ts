import {Component, OnInit} from '@angular/core';
import {Book, IBook} from '../book/book';
import {SampleBookData} from '../../shared/data/bookdata';
import {TitleIt} from '../book-shared/book-titelize.pipe';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private books: Array<IBook>;

    newBook: Book = new Book();

    constructor(private titlize: TitleIt) {
    }

    ngOnInit() {
        this.books = SampleBookData;
        this.capitalizeStringValues();
    }

    private capitalizeStringValues() {
        this.books.forEach((bk) => {
            bk.title = this.titlize.transform(bk.title, false);
            bk.author = this.titlize.transform(bk.author, ['jeffery']);
            bk.publisher = this.titlize.transform(bk.publisher, ['house']);
        });
    }

    public getBooks(): Array<Book> {
        return this.books;
    }

    onSubmit($event) {
        console.log(`submit form: ${ JSON.stringify($event)}`);
    }
}
