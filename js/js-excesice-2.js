let libraryBooks = [
    { title: "The Road Ahead", author: "Steve Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
   ];
   
function addBook(title, author, libraryID){
    libraryBooks = libraryBooks.concat({title, author, libraryID});
    return libraryBooks[libraryBooks.length-1];
}

// console.log(addBook("Hieu Test","Mr.Hieu",4443))
// console.log(libraryBooks)

function getTitles(){
    return libraryBooks.map(o => o.title)
                       .sort();
}

// console.log(getTitles())

function findBook(title){
    title = title.toLowerCase();
    return libraryBooks.filter(o => o.title.toLowerCase().includes(title))
                       .sort((o1,o2) => o1.author.localeCompare(o2.author));
}

// console.log(findBook("road"))
