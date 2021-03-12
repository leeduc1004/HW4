//? 1: FOR AND OBJECT:
//* 1. X receives from 'product' is VALUE.
//* 2. 
// let product = {
//     name : 'Xiaomi rice cooker',
//     price : 1700,
//     brand : 'Xiaomi',
//     color : 'White' 
// };
// let productArr = [product];
// for ( i = 0; i < productArr.length; i++) {
//     console.log(productArr[i]);
// }

//? 2: 

// const task = {
//     subject : 'Implement login feature',
//     createBy : 'Hoang Ngoc Duc',
//     assignTo : 'Nguyen Phuong Nam',
//     dueDate : '2019-10-08T18:00:24+0000',
//     expectedHours : 0.5,
// };

// console.log(task);

// let {subject : X, dueDate : Y, assignTo : Z} = task;

// console.log(X);
// console.log(Y);
// console.log(Z);

//? 3:
//* 3.1 : ARRAY IS THE DATA TYPE OF THE OUTERMOST LAYER
//* 3.2 : IT'S A OBJECT
//* 3.3 : USE CONSOLE.LOG()

//? 4:
//* 4.1:
// let dictionary = {
//     debug : 'The process of figuring out why your program has a certain error and how to fix it',
//     done : 'When your task is complete, the only thing you have to do is to wait for users to use it',
//     defect : 'the formal word for error ',
//     pm : 'The short version of Project manager, the person in charge of the final result of a project',
//     uiux : 'UI means User Interface, UX means User Experience, are the process to define how your products looks and feels'
// };
// console.log(dictionary);

// //*4.2:
// let input;
// let dev;

// while(true) {
//     input = prompt('Hi there, this is dev dictionary');
//         if (input === 'debug') {
//            alert(`Debug : ${dictionary.debug}`);
//       } else if (input !== dictionary ) {
            
//             let newWord = prompt(`We could find your word: ${input}, leave your explanation`) 
//                 dictionary.dev = newWord;
//                 alert('Done');
//                 console.log(dictionary);
               
//       } 
//  }

//? Bai 5:

// let Phone1 = {
//             name : 'Xiaomi battery charger 20000mah',
//             brand : 'Xiaomi',
//             price : 428,
//             color : 'White',
//             category: 'Charger'

// },            Phone2 = {
//             name : 'VSmart Active 1',
//             brand : 'VSmart',
//             price : 5487,
//             color : 'Black',
//             category : 'Phone'

// },            Phone3 = {
//             name : 'IphoneX',
//             brand : 'Apple',
//             price : 21490,
//             color : 'Gray',
//             category : 'Phone'

// },            Phone4 = {
//             name : 'Samsung Galaxy A9',
//             brand : 'Samsung',
//             price : 8149,
//             color : 'Blue',
//             category : 'Phone'
// }

//  Phone1.Provider = ['Phukienzero','Dientucc'];
//  Phone2.Provider = ['Tgdd','Ddghn','VhStore'];
//  Phone3.Provider = 'Tgdd';
//  Phone4.Provider = 'Tgdd';

//      console.log(`Name: ${Phone1.name}`);
//      console.log(`Price: ${Phone1.price}`);
//  console.log('---------------------------------------')
//      console.log(`Name: ${Phone2.name}`);
//      console.log(`Price: ${Phone2.price}`);
//  console.log('---------------------------------------')
//      console.log(`Name: ${Phone3.name}`);
//      console.log(`Price:${Phone3.price}`);
//  console.log('---------------------------------------')
//      console.log(`Name: ${Phone4.name}`);
//      console.log(`Price: ${Phone4.price}`);
//  console.log('---------------------------------------')

//  let input = prompt('Enter the product position, category or provider');
//        if    ( input === '1')      {
//                console.log(Phone1);
// }   else if ( input === '2')       {
//                console.log(Phone2);
// }   else if ( input === '3')       {
//                console.log(Phone3);
// }   else if ( input === '4')       {
//                console.log(Phone4);
// }   else if ( input === 'charger') {
//                console.log(Phone1);
// }   else if ( input === 'phone')   {
//                console.log(Phone2);
//                console.log('---------------------------------------')
//                console.log(Phone3);
//                console.log('---------------------------------------')
//                console.log(Phone4);
// }   else if ( input === 'tgdd')    {
//                console.log(Phone2);
//                console.log(Phone3);
//                console.log(Phone4);
// }   else if ( input === 'Phukienzero') {
//                console.log(Phone1);
// }   else if ( input === 'Dientucc')  {
//                console.log(Phone2);
// }   else if ( input === 'VhStore') {
//                console.log(Phone2);
// }   else    {
//                alert('Phone doesnt exist');
// }
// console.log(Phone1);
// console.log('---------------------------------------')
// console.log(Phone2);
// console.log('---------------------------------------')
// console.log(Phone3);
// console.log('---------------------------------------')
// console.log(Phone4);
               

//? Bai 6:


                
// let task = [  {complete : false, name : 'html'},
//               {complete : false, name : 'css'},
//               {complete : false, name : 'basicsofJS'},
//               {complete : false, name : 'NodePackageManager'},
//               {complete : false, name : 'git'}
// ];

//    console.log(`Hi there, this is your learning tasks to front-end dev career:`);
//    for ( let i = 0; i < task.length; i++) {
    
//          console.log(task[i]);
//  }

// let input;
// while(true) {
    
//     input = prompt('Enter your command(New,Delete,Update,Complete)');

//       if (input === 'New') {
//             let input2 = prompt('Enter new task:')
//                 input2 = {complete : false, name : input2};
//                 task.push(input2);
//                 console.log(task)

//     } else if ( input ==='Update') {
//             let input3 = Number(prompt('Enter position'));
//             let input4 = prompt('Enter new title');
            
//             objIndex = task.findIndex((obj => obj.id ==input3));

//             task[objIndex].name = input4;

//             console.log(task[objIndex]);
                
            
//     } break;
// }

let x = 'Hello';
var y = '';
for( let i = x.length; i >= 0 ; i--) {
    y += x[i];
    console.log(y)
} return y; 



     




