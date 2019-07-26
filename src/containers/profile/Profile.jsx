import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile.sass'
// eslint-disable-next-line no-unused-vars
import Route from '../../components/list-components/Route'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import UserInfo from '../../components/profile/UserInfo'
// eslint-disable-next-line no-unused-vars
import CarsList from '../../components/profile/CarsList'
// eslint-disable-next-line no-unused-vars
import PreviousRoute from '../../components/list-components/PreviousRoute'
import { connect } from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../commands/new-ride-comm/rides'

class Profile extends React.Component {
  componentDidMount() {
    this.props.requestRides()
  }

  render() {
    const { rides = [] } = this.props
    const dRidesArr = rides.map(item => {
      return (
        <Route
          routeid={item.id}
          key={item.id}
          depPoint={item.startPointName}
          destPoint={item.endPointName}
        />
      )
    })
    const prevRides = rides.map(item => {
      return (
        <PreviousRoute depPoint={item.depPoint} destPoint={item.destPoint} key={item.id} />
      )
    })
    return (
      <>
        <UserInfo />
        <Tab.Container defaultActiveKey="favroutes">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="favroutes">
                <Button variant="outline-dark">My Favorite Routes</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cars">
                <Button variant="outline-dark">My Cars</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="lastroutes">
                <Button variant="outline-dark">My Last Routes</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="pscrollable">
            <Tab.Content>
              <Tab.Pane eventKey="favroutes">
                {dRidesArr.length === 0 ? <h1>No favourites yet</h1> : <ListGroup>{dRidesArr}</ListGroup>}
              </Tab.Pane>
              <Tab.Pane eventKey="cars">
                <CarsList />
              </Tab.Pane>
              <Tab.Pane eventKey="lastroutes">
                <ListGroup>{prevRides}</ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
