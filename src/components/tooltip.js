import React from 'react'
import { Tooltip } from 'reactstrap'

export default class Blurb extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      tooltipOpen: false
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }
  render() {
    return (
      <Tooltip placement='top' isOpen={this.state.tooltipOpen} target='supple'
        toggle={this.toggle}>
      </Tooltip>
    )
  }
}
