import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDo } from "src/app/todo.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() updatedList!: ToDo[];
  // isComplete: boolean = false;

  change(x: ToDo) {
    if (!x.completed) {
      x.completed = true;
      // this.isComplete = true;
    } else {
      x.completed = false;
      // this.isComplete = false;
    }

    console.log(x);
  }
}
