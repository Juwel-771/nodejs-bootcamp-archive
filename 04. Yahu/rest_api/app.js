const express = require("express")
const app = express()

// * middleware
app.use(express.json());

let books = [
    {
        "id": "1",
        "title" : "Book 1"
    },
    {
        "id": "2",
        "title": "Book 2"
    }
];

// *
app.get("/", (req, res)=>{
    res.json({
        message: "Welcome to book store API"
    })
});

app.get("/get", (req, res)=>{
    res.json(books);
});

// * get single book
app.get("/get/:id", (req, res)=>{
    const book = books.find(items => items.id === req.params.id);
    
    if(book){
        res.status(200).json(book);
    }else {
        res.status(404).json({
            message: "Book not found, please try with different ID",
        })
    }
})

// * add books 
app.post("/add", (req, res)=>{
    const newBook = {
        id: books.length+1,
        title: `Books ${books.length + 1}`
    };

    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "New Book Added!"
    })
})

// * update book
app.put("/update/:id", (req, res)=>{
    const findBook = books.find((item) => item.id === req.params.id); 
    
    if(findBook){
        findBook.title = req.body.title || findBook.title;
        res.status(200).json({
            data: findBook,
            message: "Book title updated"
        });
    }else {
            res.status(400).json({
            message: "Book not updated"
        });
    }

    
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`POST IS RUNNING ${PORT}`);
});

