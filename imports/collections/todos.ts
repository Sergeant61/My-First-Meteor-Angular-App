import { MongoObservable } from 'meteor-rxjs';

import { Todo } from '../models/Todo';

export const Todos = new MongoObservable.Collection<Todo>('todos');
