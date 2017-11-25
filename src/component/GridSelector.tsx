import * as React from 'react';
import classNames from 'classnames'
import { iGridSelector } from '../_inc/namespaces';

export class GridSelector extends React.Component<iGridSelector.Props, iGridSelector.State> {
  constructor(props: iGridSelector.Props) {
    super(props);

  }

  public shouldComponentUpdate(nextProps, nextState) {
    let sameProps = false;

    if (
      this.props.selecting !== nextProps.selecting ||
      this.props.selectionStartOffset !== nextProps.selectionStartOffset ||
      this.props.selectionEndOffset !== nextProps.selectionEndOffset
    ) {
      sameProps = true;
    }

    return sameProps;
  }

  public render() {
    const {
      selecting,
      gridCSS,
      selectionStartOffset,
      selectionEndOffset
    } = this.props;

    if(!selecting) return null;

    let selectorStyles = {
      left: selectionStartOffset.x,
      top: selectionStartOffset.y,
      width: selectionEndOffset.x - selectionStartOffset.x,
      height: selectionEndOffset.y - selectionStartOffset.y
    };

    return (
      <div
        className={classNames(gridCSS.cellSelector)}
        style={selectorStyles}
      />
    )
  }
}
