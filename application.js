const button = document.querySelector(".get-jokes");
const buttonPost = document.querySelector(".post-jokes");
const buttonDelete = document.querySelector(".delete-jokes");
const buttonEdit = document.querySelector(".edit-jokes");
const div = document.getElementById("joke-here");

button.addEventListener('click', getJokes);


// GET
function getJokes(e){
  const xhr = new XMLHttpRequest();
  let number = document.getElementById("number").value;
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status ===200){
      const response = JSON.parse(this.responseText);
      let output = '';
      if(response.type === 'success'){
        response.value.forEach(function(i){
          output += `<li>${i.joke}</li>`;
        });
      }
      else 
      {
        output += `<li>Something</li>`;
      }
      div.innerHTML= output;
    }
  }
  
  xhr.send();
  e.preventDefault();
}


button.addEventListener('click', postJoke);

// POST
function postJoke(e){
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

  xhr.onload = function(){
    
  }

  xhr.send();

  e.preventDefault();
}

// DELETE


// UPDATE
