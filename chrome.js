// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.querySelector("#input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// let tabBtn = document.getElementById("tab-btn")
// const tabs = [
//     {url: "http://www.linkedin.com/in/per-harald-borgan/"}
// ]


// tabBtn.addEventListener("click", function() {
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
    
// })


// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i ++) {
//     listItems +=
//      `<li>
//          <a target = "_blank" href = "${leads[i]}">
//          ${leads[i]}
//          </a>
//      </li> ` 

   
// }  

// ulEl.innerHTML = listItems

// }


//  deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
//  })

//   inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""

//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
// render(myLeads)

// })















 
// let inputBtn = document.getElementById("input-btn")
// let myLeads = []
// let inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")





// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     renderLeads()
// })



// function renderLeads() {
//   let listItems = ""
//   for (let i = 0; i < myLeads.length; i++) {
//       listItems +="<li>" + myLeads[i] + "</li>"
//   } 
// ulEl.appendChild(li)  
// }








// 05:22:42









// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")



// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })


// function renderLeads() {
//    let listItems = ""

// for (let i = 0; i < myLeads.length; i++) {

//      listItems += `
//      <li>
//         <a target='_blank' href= '${myLeads[i]}'>
//              ${myLeads[i]} 
//         <a>
//      </li>
//      `
   
// } 
// ulEl.innerHTML = listItems

// }



// let myLeads = []
// const inputEl = document.querySelector('#input-el')
// const inputBtn = document.getElementById('input-btn')
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener('click', () => {
//    myLeads.push(inputEl.value)
//    inputEl.value = ""
//    renderLeads()
// })



// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//         <li>
//             <a target='_blank' href='${myLeads[i]}'>
//                 ${myLeads[i]}
//             <a/>
//         <li/>
//     `
//      }
//      ulEl.innerHTML = listItems 
// }














//                                                      05:13:29



// const btn = document.querySelector('#container')

// btn.innerHTML = "<button onclick='buy()'>Buy!<button/>"


// function buy() {
//     btn.innerHTML += '<p>Thank you for buying!</p>'
// }



















let myLeads = []
let oldLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads') )


// localStorage.setItem('myName', 'Soheli Arefin Kona')


// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener('click', function() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })





    
})




function render(leads) {
    let listItems = ''
    for (let i = 0; i < leads.length; i++ ) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}





deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))


    render(myLeads)
    console.log( localStorage.getItem("myLeads"))
})



// 7:08