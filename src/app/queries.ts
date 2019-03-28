import gql from 'graphql-tag';

export const GetQuery = gql`
query PostsGetQuery{
  Apollo {
      id
      text
      is_completed
    }
}`;

export const AddMutation = gql`
    mutation insert_Apollo($objects: [Apollo_insert_input!]! ) {
        insert_Apollo(objects: $objects) {
          returning {
            id
            text
            is_completed
            user
          }
        }
      }
`;

export const UpdateMutation = gql `
mutation updateMutation($where: Apollo_bool_exp!, $set: Apollo_set_input!) {
    update_Apollo(
      where: $where,
      _set: $set
    ) {
      affected_rows
      returning {
        id
        is_completed
        text
      }
    }
  }`;

  export const DeleteMutation = gql `
  mutation DeleteMutation($where: Apollo_bool_exp!) {
      delete_Apollo(
        where: $where
      ) {
        affected_rows
        returning {
          id
        }
      }
    }`;
