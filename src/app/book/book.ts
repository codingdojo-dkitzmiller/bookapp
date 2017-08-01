export interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    pages: number;
    publisher: string;

}

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    pages: number;
    publisher: string;

    constructor() {
    }
}
