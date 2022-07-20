const booksButton = document.querySelector('.books');
const membersButton= document.querySelector('.members');
const contentContainer = document.querySelector('.content-container')

const getBooks = async() => {
   const apiData = await fetch('https://fakerapi.it/api/v1/books?_')
   const jsonData = await apiData.json()
   //console.log(jsonData);
   const books=jsonData.data
   //console.log(books)
   

   // fetch new api for members 
   // do event listener 

   for(let book of books) {
      //const title = book.title
      const title=book.title
      const author = book.author
      const image = book.image 
      const descripton = book.description 

      
      const bookInfo = document.createElement('div')
      bookInfo.className = 'book-container'
      bookInfo.innerHTML = 
      `<h3>${title}</h3>
      <h4>${author}</h4>
      <div>📚</div>
      <p>${descripton}</p>
      `
      contentContainer.append(bookInfo)
      //const titleContainer = document.createElement('h4')
      //titleContainer.className = 'book-container'
      //titleContainer.style.border = '1px solid black'
      //titleContainer.innerText=book.title
      //contentContainer.append(titleContainer)
       //<img src=${image} />
   }
}

booksButton.addEventListener('click', getBooks)