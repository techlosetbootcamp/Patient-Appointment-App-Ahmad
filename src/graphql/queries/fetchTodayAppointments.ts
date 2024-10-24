import {gql} from '@apollo/client';
export const FETCH_TODAY_UPCOMMING_APPOINTMENTS = gql`
  query getTodayUpcomingAppointments {
    getTodayUpcomingAppointments {
      id
      fullName
      age
      gender
      phoneNo
      address
      email
      medicalHistory
      presciptions
      details
      scheduledDate
      status
      startTime
      endTime
      doctorId
      patientId
    }
  }
`;

export const FETCH_TODAY_MISSED_APPOINTMENTS = gql`
  query getTodayMissedAppointments {
    getTodayMissedAppointments {
      id
      fullName
      age
      gender
      phoneNo
      address
      email
      medicalHistory
      presciptions
      details
      scheduledDate
      status
      startTime
      endTime
      doctorId
      patientId
    }
  }
`;
export const FETCH_TODAY_COMPLETED_APPOINTMENTS = gql`
  query getTodayCompletedAppointments {
    getTodayCompletedAppointments {
      id
      fullName
      age
      gender
      phoneNo
      address
      email
      medicalHistory
      presciptions
      details
      scheduledDate
      status
      startTime
      endTime
      doctorId
      patientId
    }
  }
`;
