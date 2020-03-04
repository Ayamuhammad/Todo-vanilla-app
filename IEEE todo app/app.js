document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#book-list ul');
    const forms = document.forms;
  
    // delete books
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
    // add books
    const addForm = forms['add-book'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();

    // check for empty input (not working)
   /* function required() 
    {
      if (inputtx.value.length == 0)
       { 
          alert("enter a task");  	
          return false; 
       }  	
       return true; 
     }
  */
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const bookName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      // add text content
      bookName.textContent = value;
      deleteBtn.textContent = 'delete';
  
      // add classes
      bookName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(bookName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  
    // filter books
    const searchBar = forms['search-todo'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const books = list.getElementsByTagName('li');
      Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    });
  
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
    
  
  })
  