export class ToDo {
   
    constructor(
      public userId: number,
      public id: number,
      public title: string,
      public completed: boolean
    ) {
      //Knyter samman
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }
  
