import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableAwesome = Loadable({
  loader: () => import('./Awesome'),
  LoadingComponent: Loading
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'Time unknown',
      reactStatus: 'React not loaded :(',
      jqueryStatus: 'jQuery not loaded :(',
      lodashStatus: 'lodash not loaded :(',
      angularStatus: 'Angular not loaded :(',
      renderAwesome: false
    };
  }

  getCurrentDate() {
    import('moment').then((moment) => (
        this.setState({
          time: moment().format()
        })
      )).catch(function(err) {
        console.log('Failed to load moment', err);
      });
  }

  getReact() {
    import('react').then(() => (
        this.setState({
          reactStatus: 'react loaded!'
        })
      )).catch(function(err) {
        console.log('Failed to load react', err);
      });
  }

  getjQuery() {
    import('jquery').then(() => (
        this.setState({
          jqueryStatus: 'jquery loaded!'
        })
      )).catch(function(err) {
        console.log('Failed to load jquery', err);
      });
  }

  getLodash() {
    import('lodash').then(() => (
        this.setState({
          lodashStatus: 'lodash loaded!'
        })
      )).catch(function(err) {
        console.log('Failed to load lodash', err);
      });
  }

  getAngular() {
    import('angular').then(() => (
        this.setState({
          angularStatus: 'angular loaded!'
        })
      )).catch(function(err) {
        console.log('Failed to load angular', err);
      });
  }

  getAwesome() {
  	this.setState({
  		renderAwesome: !this.state.renderAwesome
  	});
  }

  render() {
    return (
      <div>
      	<div className="statuses">
      		<div>{this.state.time}</div>
      		<div>{this.state.reactStatus}</div>
		      <div>{this.state.jqueryStatus}</div>
		      <div>{this.state.lodashStatus}</div>
		      <div>{this.state.angularStatus}</div>
      	</div>
	      <button onClick={this.getCurrentDate.bind(this)}>Get time</button>
	      <button onClick={this.getReact.bind(this)}>Get React</button>
	      <button onClick={this.getjQuery.bind(this)}>Get jQuery</button>
	      <button onClick={this.getLodash.bind(this)}>Get lodash</button>
	      <button onClick={this.getAngular.bind(this)}>Get Angular</button>
	      <button onClick={this.getAwesome.bind(this)}>Get awesome</button>
	      {this.state.renderAwesome && <LoadableAwesome />}
      </div>
    );
  }
}
