import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage'


const NOTIFICATION_KEY='flashcards'


export function getDailyReminderValue () {
   return {
       today: 'Do not forget to take quiz today'
   }
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
       .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Take Quiz',
        body: 'Don not forget to get quiz for today',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if(data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync()
        
                        let tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() +1)
                        tomorrow.setHours(20)
                        tomorrow.setMinutes(0)
                    Notifications.scheduleNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )
  
                        AsyncStorage.setItem(NIOTIFICATION_KEY, JSON.stringify(true))
                    }
                })
                .catch(err => console.log(err))
            }
        })

}