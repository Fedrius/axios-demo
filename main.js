

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

//get a method of axios, single argument which is url
//same thing with post. but it takes 2 arguements
//always returns a promise
//then and catch take a callback function
axios.get(BASE_URL + '/todos' + API_KEY).then((response)=>{
    console.log('resp', response);
}).catch((error)=>{
    console.log('error', error);
});

const newItem = {
    title: 'Here is my new Item',
    details: 'here are the details for my todo list'
};

// axios.post(BASE_URL + '/todos' + API_KEY, newItem).then((response)=>{
//     console.log('add resp', response);
// }).catch((error)=>{
//     console.log('errror',error);
// })