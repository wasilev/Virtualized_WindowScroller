import React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  WindowScroller,
  List
} from "react-virtualized";
import PropTypes from "prop-types";
import "./styles/App.css";

class OverviewList extends React.PureComponent {
  static contextTypes = {
    customElement: PropTypes.any
  };

  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 45
  });

  renderRow = ({ index, key, style, parent }) => {
    const { items } = this.props;
    const item = items[index];
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        <div key={key} className="item" style={style}>
          {index} - {item.name} {item.email}
        </div>
      </CellMeasurer>
    );
  };

  render() {
    return (
      <div className="postingList">
        <WindowScroller scrollElement={this.context.customElement}>
          {({ height, isScrolling, registerChild, scrollTop }) => {
            console.log("WindowScroller", isScrolling, height);
            return (
              <div className="WindowScrollWrapper">
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <div ref={registerChild}>
                      <List
                        className="ComponetList"
                        autoHeight
                        height={height}
                        isScrolling={isScrolling}
                        rowCount={100}
                        rowHeight={this.cache.rowHeight}
                        rowRenderer={this.renderRow}
                        scrollTop={scrollTop}
                        width={width}
                      />
                    </div>
                  )}
                </AutoSizer>
              </div>
            );
          }}
        </WindowScroller>
      </div>
    );
  }
}

export default OverviewList;
