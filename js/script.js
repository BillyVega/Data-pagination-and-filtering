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

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('ul');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i+=1)
      if (i >= startIndex && i < endIndex) {
         let studentItem = 
         `
               <li class="student-item cf" >
               <div class="student-details">
               <img class="avatar" src="https://randomuser.me/api/portraits" alt="Profile Picture">
               <h3>$</h3>
               <span class="email"></span>
               </div>
               <div class="joined-details">
               <span class="date"></span>
               </div>
               </li>
               `
               studentList.insertAdjacentHTML("beforeend", studentItem);
            }
         
         };

      // const ul = document.querySelector('ul');
      // const li = document.createElement('li');
      // li.className = "student-item cf";
      // ul.appendChild(li);
      
      // const div = document.createElement('div');
      // div.className = "student-details";
      // ul.appendChild(div);
   
      
      // const img = document.createElement('img');
      // img.className ="avatar"
      // img.src ="https://randomuser.me/api/portraits/women/25.jpg";
      // img.alt ="Profile Picture";
      // div.appendChild(img);

      // const h3 = document.createElement('h3');
      // div.appendChild(h3);

      // const span = document.createElement('span');
      // span.className = "email";
      // div.appendChild(span)

      // const div2 = document.createElement('div');
      // div2.className = "joined-details";
      // ul.appendChild(div2);

      // const span2 = document.createElement('span');
      // span.className = "date";
      // div2.appendChild(span);
   
     
   


   
        

 showPage(data,1);



 

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
