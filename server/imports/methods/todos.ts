import { Meteor } from 'meteor/meteor';

import { Todos } from '../../../imports/collections/todos';
import { Todo } from 'imports/models/Todo';

Meteor.methods({
  addTodo(todo: Todo) {
    Todos.insert(todo);
  },
  removeTodo(_id: string) {
    Todos.remove({
      _id
    })
  }
})
