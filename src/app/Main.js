import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/AppBar.jsx';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

class Main extends React.Component {

  render() {
    console.log(AppBar);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar />
          <h1>Hello World</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

