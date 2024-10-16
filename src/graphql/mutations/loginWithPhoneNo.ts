import {gql} from '@apollo/client';
export const LOGIN_WITH_PHONE_NO = gql`
  mutation LoginWithPhoneNo($phoneNo: String!, $userOtp: String) {
    LoginWithPhoneNo(phoneNo: $phoneNo, userOtp: $userOtp)
  }
`;
