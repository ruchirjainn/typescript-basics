import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

/*
let name: string;
let name1: any;  // not recommended
let name2: unknown;  // recommended
let age: number | string; // union in types
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// CREATING OUR OWN TYPE

// extending in typescript
type X = {
  a: string;
  b: string;
}

type Y = X & {
  c: string;
  d: number;
}

interface Person {
  name: string,
  age? : number
}

interface Guy extends Person {
  profession: string;
}

let person: Person = {
  name: "Piyush",
};

let lotsOfPeople: Person[];

let printName: Function;
let printName: (name: string) => void;
// void -> returns undefined
// never -> returns nothing

function printName(name: string){
  console.log(name);
}
*/

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
