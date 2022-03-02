import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FETCH_TODOS, INSERT_TODO } from "./queries";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const [insertTodo, { loading, error }] = useMutation(INSERT_TODO);

  if (!isAuthenticated) return <></>;

  const handleSubmit = (e) => {
    e.preventDefault();
    insertTodo({
      //   auth0 stores userId in sub
      variables: { title: title, userId: user.sub },
      //   refresh the list of todos when the todo is inserted
      refetchQueries: [{ query: FETCH_TODOS }],
    }).then(() => {
      //  clear the input field
      setTitle("");
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo Title"
        />
        {error && <pre>{JSON.stringify(error)}</pre>}
        <button type="submit">{loading ? "Creating" : "Create"}</button>
      </form>
    </>
  );
}
