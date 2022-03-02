import { gql } from "@apollo/client";
export const INSERT_TODO = gql`
  mutation InsertTodo($title: String = "", $userId: String = "") {
    insert_todos_one(object: { title: $title, userId: $userId }) {
      id
      title
      userId
    }
  }
`;

export const FETCH_TODOS = gql`
  query FetchTodos {
    todos {
      id
      title
      userId
    }
  }
`;

export const DELETE_TODOS = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todos_by_pk(id: $id) {
      title
      id
      userId
    }
  }
`;
