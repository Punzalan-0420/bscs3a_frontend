//console.log(fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuxUOcfaNIa_PZ2zgpCjwtS6ziiwb0tAZJg&s')
//.then(response => {
  //  console.log(response)
    //return response.blob();
//})

//.then(blob =>{
  //  console.log(blob)
    //document.querySelector('#myImage').src=URL.createObjectURL(blob)
//})

//.catch(error =>{
  //  console.log(error)
//})

//)

//id selector
const content=document.querySelector('#content')

//loading page

window.addEventListener("load", () =>{
    getUsers();
 

})
function getUsers(){
  let html=""
   fetch("https://bscs3a-crud-api.onrender.com/api/members", {mode :"cors"})
   // fetch("http://localhost:10000/api/damon/", {mode : "cors"})
    .then((response) =>{
          console.log(response)
          return response.json()
    })
    .then((data)=> {
        console.log(data)
        data.forEach((element)=>{
            html+=`<li>${element.first_name} ${element.last_name}</li>`
        })
        content.innerHTML=html
    })
    .catch((error)=>{
        console.log(error)
    })
}