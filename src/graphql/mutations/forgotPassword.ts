import {gql} from '@apollo/client';

export const SEND_RESET_PASSWORD_OTP = gql`
  mutation sentResetPasswordOtp($email: String!) {
    sentResetPasswordOtp(email: $email)
  }
`;
export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String, $newPassword: String) {
    resetPassword(token: $token, newPassword: $newPassword)
  }
`;
