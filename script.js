// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 
//           let ans5 = ans2.map((item)item.name.toUpperCase())  
// //Q1

// studentRecords.map((item) =>{
//     console.log(item.name.toUpperCase)
// })


// // Q2

// studentRecords.map((item)=> {
//     if(item.marks > 50){
//         console.log(item)
//     }
    
// })

// // Q4
// studentRecords.reduce((preValue,currValue) =>{
//     return preValue += currValue.marks
// }, 0)

// //Q5

// //Q6

// //Q7

// //Q8


// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 
          
//     let ans = studentRecords.map((item) => item.name.toUpperCase())
//     console.log(ans)
    
//     let ans2 = studentRecords.filter((item) => item.marks>50)
//     console.log(ans2)
    
//    let ans3 = studentRecords.filter((item) => 
//    item.marks>50 && item.id>120)
//     console.log(ans3)
    
//     let ans4 =0
//     studentRecords.map((items) => 
//     items+ans4.marks)
//     console.log(ans4)
    
//     //let ans5 = ans2.map((item)item.name.toUpperCase())
        const studentRecords = [ 
            {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 },
            {name: 'Wick', id: 115, marks : 75 } 
        ]; 

            let a = studentRecords.find((item) => 
            item.marks > 50)
            console.log(a.name)

                
             
            
             
                
//     let ans6 =0
//     studentRecords.filter((item) => item.id>120)
//     .map((item)=>ans6+=item.marks)
//     console.log( ans6)
    
//     // Q7
//     let ans7 = 0
//     let lessmarks = studentRecords.map((item)=>{
//         if(item.marks<50)
//             item.marks+=15
        
//         return item
//     }).map((item)=>item.marks>50 ? ans7+=item.marks:null) //use also forEach
//     console.log(ans7)
    
    // let ans8 = [
    //     {name:"firstName",class:"firstClass", rollNo: 10},
    //     {name:"secondName",class:"secondName", rollNo: 20},
    //     {name:"ThirdName",class:"thirdClass", rollNo: 30},
    //     {name:"fourthName",class:"fourthClass", rollNo: 40},
    //     {name:"fithName",class:"fitthClass", rollNo: 50},
    //     {name:"sixthName",class:"sixthClass", rollNo: 60},
    // ]

    // console.log(ans8)
    
    
    
    
    
    