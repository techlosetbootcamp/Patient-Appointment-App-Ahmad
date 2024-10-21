import {View, Text, FlatList} from 'react-native';
import React from 'react';
import AppointmentInfo from './appointmentInfo/AppointmentInfo';
import {AppointmentInfoType, AppointmentStatus} from '../../types/Types';
export const appointments: AppointmentInfoType[] = [
  {
    name: 'John Doe',
    age: '30',
    appointmentTime: '09:00 AM',
    status: AppointmentStatus.UPCOMING,
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    age: '25',
    appointmentTime: '10:30 AM',
    status: AppointmentStatus.MISSED,
    profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mark Johnson',
    age: '40',
    appointmentTime: '11:00 AM',
    status: AppointmentStatus.COMPLETED,
    profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emily Davis',
    age: '28',
    appointmentTime: '12:00 PM',
    status: AppointmentStatus.UPCOMING,
    profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Brown',
    age: '35',
    appointmentTime: '01:00 PM',
    status: AppointmentStatus.UPCOMING,
    profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sarah Wilson',
    age: '32',
    appointmentTime: '02:30 PM',
    status: AppointmentStatus.COMPLETED,
    profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'David Lee',
    age: '45',
    appointmentTime: '03:00 PM',
    status: AppointmentStatus.COMPLETED,
    profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Sophia Martinez',
    age: '22',
    appointmentTime: '04:00 PM',
    status: AppointmentStatus.MISSED,
    profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Daniel Clark',
    age: '38',
    appointmentTime: '05:30 PM',
    status: AppointmentStatus.COMPLETED,
    profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Olivia Lewis',
    age: '29',
    appointmentTime: '06:00 PM',
    status: AppointmentStatus.UPCOMING,
    profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];
const upcomingAppointments = appointments.filter(
  item => item.status === 'UPCOMING',
);

// const AppointmentsList = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//         paddingHorizontal: 20,
//         paddingTop: 15,
//       }}>
//       <FlatList
//         data={upcomingAppointments}
//         renderItem={({item}: {item: AppointmentInfoType}) => (
//           <AppointmentInfo
//             age={item.age}
//             appointmentTime={item.appointmentTime}
//             name={item.name}
//             profilePicture={item.profilePicture}
//             status={item.status}
//             // key={item.profilePicture}
//           />
//         )}
//       />
//     </View>
//   );
// };

// export default AppointmentsList;