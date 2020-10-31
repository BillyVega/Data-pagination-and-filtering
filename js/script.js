/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// search bar ---
function searchBar() {
   const header = document.querySelector('header')
   let html = 

   `<label for="search" class="student-search">
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
 
   header.insertAdjacentHTML('beforeend',html);
}
searchBar();


function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('ul');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i+=1) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = 
         `
               <li class="student-item cf" >
               <div class="student-details">
               <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
               </div>
               </li>
               `
               studentList.insertAdjacentHTML("beforeend", studentItem);
            }

   }
       
};
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 7);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';
   for (let i = 1; i < numOfPages; i+=1){
      
      const button = 
      `<li>
         <button type="button">${i}</button>
      </li>`
      
      linkList.insertAdjacentHTML("beforeend",button);
   }
   
   linkList.addEventListener('click', (e) => {
      let clicked = e.target;
      if ( clicked.tagName === 'BUTTON' ){
      let active = document.querySelectorAll('.active')
      for (i = 0; i < active.length; i++){
         clicked.className = 'active';
         active[i].className = '';
        
   
      }
       
       showPage(list,clicked.textContent)

   }
   })
}


showPage(data,1);
addPagination(data);




// Call functions
