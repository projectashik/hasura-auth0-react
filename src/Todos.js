import { useMutation, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { DELETE_TODOS, FETCH_TODOS } from "./queries";
export function Todos() {
  const { data, loading, error } = useQuery(FETCH_TODOS);
  const { isAuthenticated } = useAuth0();
  const [deleteTodo] = useMutation(DELETE_TODOS);
  if (!isAuthenticated) return <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Fetching Data: {JSON.stringify(error)}</p>;

  const onDelete = (id) => {
    //   delete the todo
    deleteTodo({
      variables: { id: id },
      //   refresh the list of todos when the todo is deleted
      refetchQueries: [{ query: FETCH_TODOS }],
    }).then(() => alert("Deleted"));
  };
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
