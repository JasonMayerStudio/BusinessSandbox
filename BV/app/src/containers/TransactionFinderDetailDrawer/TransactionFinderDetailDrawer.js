import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import GDDetailView from 'Components/GDDetailView';

class TransactionFinderDetailDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: props.location.state.row,
      sequenceKey: props.location.state.sequenceKey,
    };
  }

  componentWillMount() {
    this.props.useExtendedDrawer();
  }

  componentDidMount() {
    this.props.toggleDrawer();
  }

  componentWillUnmount() {
    this.props.useExtendedDrawer();
    this.props.toggleDrawer();
  }

  getPreviousRow = () => {
    const { sequenceKey } = this.state;
    const { tableData } = this.props.history.location.state;
    // get currentIndex
    const currentIndex = tableData.findIndex(
      (item) => item.seq_key === sequenceKey,
    );
    // get previousIndex
    let previousIndex = currentIndex - 1;
    // if previousIndex < 0, then set previousIndex to tableData.lenght-1
    if (previousIndex < 0) {
      previousIndex = tableData.length - 1;
    }
    // get row from tableData given previousIndex
    return tableData[previousIndex];
  };

  getNextRow = () => {
    const { sequenceKey } = this.state;
    const { tableData } = this.props.history.location.state;
    // get currentIndex
    const currentIndex = tableData.findIndex(
      (item) => item.seq_key === sequenceKey,
    );
    // get nextIndex
    let nextIndex = currentIndex + 1;
    // if nextIndex equals tableData.length, then set nextIndex to 0
    if (nextIndex === tableData.length) {
      nextIndex = 0;
    }
    // get row from tableData given nextIndex
    return tableData[nextIndex];
  };

  goBack = () => {
    this.props.history.push({
      pathname: '/transaction-finder',
    });
  };

  gotoDetailView = (row) => {
    const { state } = this.props.history.location;
    const reportId = state.reportId;
    this.props.history.push({
      pathname: `/transaction-finder/${reportId}/details/${row.seq_key}`,
      state: {
        row,
        detailViewStructure: state.detailViewStructure,
        hierarchyTitle: state.hierarchyTitle,
        hierarchyContent: state.hierarchyContent,
        subtitleTitle: state.subtitleTitle,
        subtitleContent: state.subtitleContent,
        translations: state.translations,
        reportId,
        sequenceKey: row.seq_key,
        tableData: state.tableData,
      },
    });
    this.setState({
      row,
      sequenceKey: row.seq_key,
    });
  };

  goToPreviousRecord = () => {
    const row = this.getPreviousRow();
    this.gotoDetailView(row);
  };

  goToNextRecord = () => {
    const row = this.getNextRow();
    this.gotoDetailView(row);
  };

  render() {
    const { row } = this.state;
    const props = this.props.location.state;
    return (
      <section className="drawer-content">
        <GDDetailView
          type="report"
          data={row}
          goBack={this.goBack}
          goToPreviousRecord={this.goToPreviousRecord}
          goToNextRecord={this.goToNextRecord}
          hierarchyTitle={props.hierarchyTitle}
          hierarchyContent={props.hierarchyContent}
          translations={props.translations}
          structure={props.detailViewStructure}
          subtitleTitle={props.subtitleTitle}
          subtitleContent={props.subtitleContent}
        />
      </section>
    );
  }
}

TransactionFinderDetailDrawer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  useExtendedDrawer: PropTypes.func.isRequired,
};

export default withRouter(TransactionFinderDetailDrawer);
