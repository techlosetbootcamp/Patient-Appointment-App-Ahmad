import {gql} from '@apollo/client';

export const GET_DOCTOR_INFO = gql`
  query getDoctor {
    getDoctor {
      id
      userId
      name
      profilePhoto
      address
      email
      gender
    }
  }
`;
