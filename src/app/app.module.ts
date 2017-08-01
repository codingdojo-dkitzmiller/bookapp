import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookFormModule} from './book-form/book-form.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookSharedModule} from './book-shared/book-shared.module';
import {TitleIt} from './book-shared/book-titelize.pipe';

@NgModule({
    imports: [
        BrowserModule,
        BookFormModule,
        BookSharedModule
    ],
    declarations: [ AppComponent, BookListComponent ],
    providers: [TitleIt],
    bootstrap: [AppComponent]
})
export class AppModule {
}
