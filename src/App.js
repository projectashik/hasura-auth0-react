import { CreateTodo } from "./CreateTodo";
import { Header } from "./Header";
import { Todos } from "./Todos";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Todos />
        <CreateTodo />
      </main>
    </>
  );
}

export default App;
