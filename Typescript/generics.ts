//Generics allow you to add type arguments that can be used to enforce relationship between different members of a piece of code.

class Queue<T> {
    data: T[] = []; // Initialize data as an array of type T
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

const queue = new Queue<number>();
queue.push(100);
queue.push(160);

//We're using optional chaining(?) here in order to prevent runtime errors saying that T is undefined or null 
//it simply returns undefined when the queue is empty.

console.log(queue.pop()?.toFixed(1));
console.log(queue.pop()?.toFixed(1));
