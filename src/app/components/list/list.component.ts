import { Component, Input } from "@angular/core";
import { ToDo } from "src/app/todo.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() updatedList!: ToDo[];

  change(x: ToDo) {
    if (!x.completed) {
      x.completed = true;
    } else {
      x.completed = false;
    }
  }
}
