import { Component, OnInit } from "@angular/core";
import { ToDo } from "src/app/todo.model";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  addTodo(e: string) {
    //JAG VILL ATT EVENTET SKA PUSHAS IN I TODOLISTEN
    this.useridList.unshift({ userId: 4, id: 4, title: e, completed: false });
    console.log(this.useridList);

  }

  todoList!: ToDo[];
  useridList!: ToDo[];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchToDo();
  }

  fetchToDo() {
    this.http
      .get<ToDo[]>("https://jsonplaceholder.typicode.com/todos")
      .subscribe((res: ToDo[]) => {
        this.todoList = res;
        this.useridList = this.todoList.filter(
          (x) => x.userId === 4 && x.completed === false
        );
       
      });
  }
}
