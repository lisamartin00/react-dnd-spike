import React from 'react';
import _compose from 'lodash/fp/compose';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { createMuiTheme } from '@material-ui/core/styles';
import { theme } from '@gloojs/material-ui-theme';
import { withMaterialUI } from '@gloojs/material-ui-components';

const muiTheme = createMuiTheme(theme);

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, ...other } = this.props;
    return (
      <Container>
        <Head>
          <title>Rsh</title>
        </Head>
        <Component {...pageProps} {...other} />
      </Container>
    );
  }
}

export default _compose(
  withMaterialUI({ theme: muiTheme }),
)(NextApp);
