import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from '../store/actions/modal.action'

function Modal ({ showState, show, hide }) {
  const styles = {
    width: '200px',
    height: '200px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'blue',
    display: showState ? 'block' : 'none'
  }
  return (
    <div>
      <button onClick={show}>显示</button>
      <button onClick={hide}>隐藏</button>
      <div style={styles}></div>
    </div>
  )
}

const mapStateToProps = ({ modal }) => {
  return {
    showState: modal.show
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)