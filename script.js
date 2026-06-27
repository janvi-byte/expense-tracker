let input1=document.querySelector(".input1");
let input2=document.querySelector(".input2");
let add=document.querySelector(".add");

let table=document.querySelector("#table");
let total=document.querySelector(".total");
let count=1;
let sum=0;
add.addEventListener("click",()=>{
   let row=table.insertRow();

   row.innerHTML=`
   <td>${count}</td>
   <td>${input1.value}</td>
   <td>${input2.value}</td>
   `;
   sum+=Number(input2.value);
   total.textContent=sum;
   count++;
});


