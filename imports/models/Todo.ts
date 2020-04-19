import { ITodo } from 'imports/interfaces/ITodo';

export class Todo implements ITodo {
  _id: string;
  content: string;

  constructor(content: string) {
    this.content = content;
  }

}
