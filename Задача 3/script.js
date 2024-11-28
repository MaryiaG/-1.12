const books = [
    {
        title: "Охота на овец",
        author: "Харуки Мураками",
        pages: "635"
    
    },
    {
        title: "Волшебник страны ОЗ",
        author: "Лаймен Фрэнк Баум",
        pages: "432"
    },
    {
        title: "Триумфальная арка",
        author: "Э.М. Ремарк",
        pages: "467"
    },
    {
        title: "Щегол",
        author: "Донна Тарт",
        pages: "800"
    }
];

function findThickBook(books) {
   
    let thickBook = books[0];

    for(let i = 0; i < books.length; i++){
        if(+books[i].pages > +thickBook.pages){
        thickBook = books[i];
    } 
} 
    return thickBook;
}
let thiсkestBook = findThickBook(books);
console.log("Самая толстая книга:", thiсkestBook);
