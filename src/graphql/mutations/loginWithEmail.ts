import {gql} from '@apollo/client';

export const LOGIN_WITH_EMAIL = gql`
  mutation LoginWithEmail($email: String!, $password: String!) {
    LoginWithEmail(email: $email, password: $password)
  }
`;
