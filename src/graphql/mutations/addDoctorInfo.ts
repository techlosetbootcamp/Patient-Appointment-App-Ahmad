import {gql} from '@apollo/client';

export const ADD_DOCTOR_INFO = gql`
  mutation createDoctor(
    $name: String!
    $email: String!
    $address: String!
    $gender: gender!
    $profilePhoto: String
  ) {
    createDoctor(
      name: $name
      email: $email
      address: $address
      gender: $gender
      profilePhoto: $profilePhoto
    )
  }
`;
