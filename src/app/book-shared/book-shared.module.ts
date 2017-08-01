import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { BookSubmittedComponent }          from './book-submitted.component';
import {TitleIt} from './book-titelize.pipe';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ BookSubmittedComponent, TitleIt],
  exports:      [ BookSubmittedComponent, TitleIt, CommonModule ]
})
export class BookSharedModule { }
