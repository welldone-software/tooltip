import React from 'react'
import PropTypes from 'prop-types'
import {debounce} from 'lodash'

export default class Content extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    overlay: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,
    id: PropTypes.string,
    trigger: PropTypes.any,
    dataId: PropTypes.string
  }

  popupAlign = debounce(() => {
    const {trigger} = this.props
    if (trigger) {
      trigger.forcePopupAlign()
    }
  }, 50)

  componentDidMount() {
    this.popupAlign()
  }

  render() {
    const { overlay, prefixCls, id, dataId } = this.props
    return (
      <div className={`${prefixCls}-inner`} dataId={dataId} id={id} role="tooltip">
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>
    )
  }
}
