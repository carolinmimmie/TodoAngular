import { Component, Input, Output } from '@angular/core';
import { ToDo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
 
  input(e: string) {
    //JAG VILL ATT EVENTET SKA PUSHAS IN I TODOLISTEN
    this.toDoList.push({ userId: 4, id: 4, title: e, completed: false });
    console.log(this.toDoList)

    console.log(e);
  }

  toDoList: ToDo[] = [
    new ToDo(4, 1, 'Äta', false),
    new ToDo(4, 2, 'Träna', false),
    new ToDo(4, 3, 'Plugga', false),
    new ToDo(2, 4, 'Städa', false),
    new ToDo(2, 5, 'Sova', false),
    new ToDo(4, 5, 'Film', false),
    new ToDo(2, 5, 'Simma', false),
    new ToDo(2, 5, 'Bio', false),
  ];

}

