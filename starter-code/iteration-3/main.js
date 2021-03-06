"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date(Date.now());
    }
    TodoItem.prototype.toogleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date(Date.now());
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    TodoList.prototype.addTask = function (item) {
        console.log("Task " + item + " inserted in the list");
        this.items.push(item);
        console.log("Number of items " + this.items.length);
        return this.items.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.items);
    };
    TodoList.prototype.deleteTask = function (item) {
        console.log("Task " + item + " inserted in the list");
        this.items.splice(this.items.indexOf(item), 1);
        console.log("Number of items " + this.items.length);
        return this.items.length;
    };
    TodoList.prototype.listUncomplete = function () { };
    ;
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
