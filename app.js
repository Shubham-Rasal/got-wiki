const charlist =document.getElementById('charlist');

async function getCharacters() {
const data = await  fetch('./data.json');
const characters = await data.json();
console.log(characters);

characters.forEach(character => {
    const li = document.createElement('li');
    li.setAttribute('class', 'character');
    //name
    const name = document.createElement('h3');
    name.innerText = character.firstName + ' ' + character.lastName;
    li.appendChild(name);
    //image
    const image = document.createElement('img');
    image.src = character.imageUrl;
    li.appendChild(image);
    //description
    const description = document.createElement('p');
    description.innerText = character.title;
    li.appendChild(description);
  
    
    charlist.appendChild(li);
}
)


}


getCharacters();

const getBooks  = async () => {
    const data = await fetch('./books.json');
    const books = await data.json();
    console.log(books);
    books.forEach(book => {
        const li = document.createElement('li');
        li.setAttribute('class', 'book');
        //name
        const name = document.createElement('h3');
        name.innerText = book.name;
        li.appendChild(name);
        //author
        const author = document.createElement('p');
        author.innerText = book.authors;
        li.appendChild(author);
     
        //description
        const description = document.createElement('p');
        description.innerText = book.description;
        li.appendChild(description);
      
        
        charlist.appendChild(li);
    }
    )

}

getBooks();





    
