/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
    textColor: '#212121',
  }
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
      label="Ok"
      primary={true}
      onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
      <Dialog
      open={this.state.open}
      title="Super Secret Password"
      actions={standardActions}
      onRequestClose={this.handleRequestClose}
      >
      1-2-3-4-5
      </Dialog>
      <h1>Material-UI</h1>
      <h2>example project</h2>
      <RaisedButton
      label="Super Secret Password"
      secondary={true}
      backgroundColor="a32fae"
      onTouchTap={this.handleTouchTap}
      />
    </div>
    </MuiThemeProvider>
    );
  }
}

export default Main;
