import { Component } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { Todo } from 'imports/models/Todo';

@Component({
  selector: 'todo-add',
  templateUrl: 'todo-add.html'
})
export class TodoAddComponent {
  content: string;
  addTodo() {
    Meteor.call('addTodo', new Todo(this.content));
    this.content = null;
  }
}
