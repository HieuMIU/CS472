describe("add book", function(){
    it("add book(Hieu Test, Mr Hieu, 4443)", function(){
        assert.deepEqual(addBook("Hieu Test","Mr.Hieu",4443),{ title: "Hieu Test", author: "Mr.Hieu", libraryID: 4443 })
    })
})

let expectedGetTitles = [
    "Hieu Test",
    "Mockingjay: The Final Book of The Hunger Games",
    "The Road Ahead",
    "The Road Ahead",
    "Walter Isaacson"
   ];

describe("get tittles", function(){
    it("get tittles", function(){
        assert.deepEqual(getTitles(),expectedGetTitles)
    })
})

let expectedFindBookRoad = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "The Road Ahead", author: "Steve Gates", libraryID: 1235 }
   ];

describe("find book", function(){
    it("find book includes road", function(){
        assert.deepEqual(findBook("road"),expectedFindBookRoad)
    })
})