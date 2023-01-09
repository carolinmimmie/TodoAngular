import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { TodoComponent } from "./components/todo/todo.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListComponent } from "./components/list/list.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, ButtonComponent, TodoComponent, ListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
