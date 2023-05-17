import { gql } from '@apollo/client/core';

export const CreateUser = gql`
  mutation CreateUser($input: CreateUserInput) {
    createUser(input: $input)
  }
`;
