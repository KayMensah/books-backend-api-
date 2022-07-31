const getBooks = document.getElementById("getBook");
let addBooks = [];

const submitBook = async () => {
  //
  fetch("http://localhost:3002/getBooks")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      addBooks = data;
      //   addBooks.push(data);
      console.log(addBooks);
      addBooks.forEach((data) => {
        const Image = document.createElement("img");
        const div = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const description = document.createElement("p");
        div.setAttribute("class", "book-container");
        title.innerText = data.title;
        author.innerText = data.author;
        description.innerText = data.description;

        Image.src = data.image;
        div.append(title);
        div.append(Image);
        div.append(author);
        div.append(description);

        getBooks.append(div);
      });
    });
};
submitBook();
// async function createElement() {
//    submitBook();

//   const Image = document.createElement("img");
//   let ttt = addBooks.map((data) => data);
//   console.log(ttt);
//   Image.src =
//     "https://images-na.ssl-images-amazon.com/images/I/516uqUOSwZL._SX327_BO1,204,203,200_.jpg";
//   getBooks.append(Image);
// }

// createElement();
