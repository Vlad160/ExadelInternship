import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import NotificationsItem from './NotificationsItem'

class NotificationsList extends React.Component {
  render() {
    const { notifications } = this.props
    const notificationArr = notifications.map(item => {
      return <NotificationsItem text={item.information} routeId={item.id} key={item.activeRouteId}/>
    })
    return <ListGroup>{notificationArr}</ListGroup>
  }
}
export default NotificationsList
