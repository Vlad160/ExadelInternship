import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'

class RoutesList extends React.Component {
  render() {
    const { rides } = this.props
    const dRidesArr = rides.map(item => {
      return (
        <ListGroup.Item key={item.id}>
          {item.depPoint} -> {item.destPoint} Time: {item.depTime}
        </ListGroup.Item>
      )
    })
    return (
      <ListGroup title={this.props.type} variant="outline-dark" className='pscrollable' style={{ 'marginTop': '2%' }}>
        {dRidesArr}
      </ListGroup>
    )
  }
}

export default RoutesList
