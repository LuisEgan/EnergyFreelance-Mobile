// import { NotificationManager } from 'react-notifications'
//
// export const notificationErrorHandler = (status, response) => {
//   let message = ''
//   if (status == 400 || status == 409) {
//     if (response && response.message) {
//       for (let i = 0; i < response.message.length; i++) {
//         let error = response.message[i]
//         if (i == 0) {
//           if (error.text) {
//             message = error.text
//           } else {
//             message = 'Internal server error. Please try again.'
//           }
//         }
//         NotificationManager.error(error.text, error.field, 1500)
//       }
//       return response.message[0].text
//     }
//   }
//   if (status == 505 || status == 500 || status == 404) {
//     message = 'Internal server error. Please try again.'
//     NotificationManager.error(message, 'Error', 1500)
//     return message
//   }
// }
