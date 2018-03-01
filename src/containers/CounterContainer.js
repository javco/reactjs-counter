import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = state => {
  return {
    numberOfClicks: state.numberOfClicks
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
