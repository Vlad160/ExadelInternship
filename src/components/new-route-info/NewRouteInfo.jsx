import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Form, Container, Col, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class NewRouteInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: this.props.from,
      to: this.props.to,
      carId: '',
    }
  }

  componentDidMount() {
    this.props.requestCars()
  }

  changeCar = event => {
    const carId = event.target.value
    this.setState({ carId })
    this.props.onCar(carId)
  }

  render() {
    const { cars = [] } = this.props
    const carsArr = cars.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.carInformation}
        </option>
      )
    })

    return (
      <Container>
        <h3>New route:</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              From:
            </Form.Label>
            <Col>
              <Form.Control type="text" value={this.state.from} readOnly />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              To:
            </Form.Label>
            <Col>
              <Form.Control type="text" value={this.state.to} readOnly />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Time:
            </Form.Label>
            <Col>
              <DateSelector onChange={this.props.onTime} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridState">
            <Form.Label column sm="2">
              Car:
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                defaulvalue={this.state.carId}
                onChange={this.changeCar}
              >
                {carsArr}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Seats:
            </Form.Label>
            <Col>
              <Form.Control type="text" onChange={this.props.onSeats} />
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRouteInfo)
