import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Hello World</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

