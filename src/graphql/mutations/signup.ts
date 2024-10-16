import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation registerUser(
    $name: String!
    $email: String
    $phoneNo: String
    $password: String!
    $role: role
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      phoneNo: $phoneNo
      role: $role
    )
  }
`;
