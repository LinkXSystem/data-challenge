import React, { Component } from 'react';
import Header from './components/layout/header';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      routers: [
        {
          label: 'Data Visualization',
          icon: '',
          href: '/',
        },
      ],
      marker: '',
    };
  }

  render() {
    const { routers, marker } = this.state;

    return (
      <section className="container">
        <BrowserRouter>
          <Header routers={routers} marker={marker} />
        </BrowserRouter>
      </section>
    );
  }
}
