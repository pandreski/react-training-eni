import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import './scss/style.scss';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from './ui/theme/theme';

const theme = createMuiTheme(Theme);

const InitApp = () => (
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);

ReactDOM.render(<InitApp/>, document.getElementById('app'));
