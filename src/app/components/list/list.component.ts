import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDo } from "src/app/todo.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() updatedList!: ToDo[];
 
//  change(object: ToDo) {
//     if (object.completed === false) {
//        object.completed = true

//     } 
  
//   }


  // toDoList: ToDo[] = [
  //   new ToDo(4, 1, 'Äta', false),
  //   new ToDo(4, 2, 'Träna', false),
  //   new ToDo(4, 3, 'Plugga', false),
  //   new ToDo(2, 4, 'Städa', false),
  //   new ToDo(2, 5, 'Sova', false),
  //   new ToDo(4, 5, 'Film', false),
  //   new ToDo(2, 5, 'Simma', false),
  //   new ToDo(2, 5, 'Bio', false),
  // ];

  //GENERISK
  //HÄR SKA NYA TODOS IN
  // addTodo(arr:object[],item:object){
  //   //PUSH GÅR BRA
  //   const newList = [item, ...arr]
  //   console.log(newList)
  //   return newList

  // }
}
