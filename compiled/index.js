"use strict";
// Apilar boyicha mashq 
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];
function fetchSequentially(urls) {
    let promise = Promise.resolve();
    urls.forEach((url) => {
        promise = promise
            .then(() => {
            console.log(`Fetching from URL: ${url}`);
            return fetch(url);
        })
            .then((response) => response.json())
            .then((data) => {
            console.log("Result:", data);
        })
            .catch((error) => {
            console.log("Error fetching data:", error);
        });
    });
}
fetchSequentially(urls);
//   Promise.all boyicha mashq 
const urlone1 = "https://jsonplaceholder.typicode.com/users";
const urltue2 = "https://jsonplaceholder.typicode.com/posts";
Promise.all([fetch(urlone1).then((res) => res.json()), fetch(urltue2).then((res) => res.json())])
    .then(([users, posts]) => {
    console.log("Fetched data:", [users, posts]);
})
    .catch((error) => {
    console.log("xatolik boyicha sorov", error);
});
//   Promise.rose boyicha mashq 
const url1 = "https://jsonplaceholder.typicode.com/photos";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/comments";
Promise.race([fetch(url1), fetch(url2), fetch(url3)])
    .then((response) => response.json())
    .then((data) => {
    console.log("First completed request result:", data);
})
    .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
});
//   Api sorovlarini ketma ket 
// async va await boyicha ishlash 
const urlsApi = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];
async function fetchApi(urls) {
    for (const url of urls) {
        try {
            console.log(`Fetching from URL: ${url}`);
            const response = await fetch(url);
            const data = await response.json();
            console.log("Result:", data);
        }
        catch (error) {
            console.log("Error fetching data:", error);
        }
    }
}
fetchApi(urlsApi);
//   Xatoliklarini chiqarish 
const urlone = "https://jsonplaceholder.typicode.com/photos";
const urltue = "https://jsonplaceholder.typicode.com/todos";
const urlthree = "https://jsonplaceholder.typicode.com/comments";
async function fetchsave(urls) {
    for (const url of urls) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("First success", data);
            return;
        }
        catch (error) {
            console.log(`xatolik ${url}:`, error);
        }
    }
    console.log("sorovlar");
}
fetchsave([urlone, urltue, urlthree]);
// Malumotlarni saqlash T bilan ishlash 
// class Storage<T> {
//     private items: T[] = [];
//     addItem(item: T) {
//       this.items.push(item);
//     }
//     removeItem(item: T) {
//       this.items = this.items.filter((i) => i !== item);
//     }
//     getItems(): T[] {
//       return this.items;
//     }
//   }
//   const stringStorage = new Storage<string>();
//   stringStorage.addItem("apple");
//   stringStorage.addItem("banana");
//   stringStorage.removeItem("apple");
//   console.log(stringStorage.getItems()); 
//   const numberStorage = new Storage<number>();
//   numberStorage.addItem(42);
//   numberStorage.addItem(100);
//   numberStorage.removeItem(42);
//   console.log(numberStorage.getItems());
