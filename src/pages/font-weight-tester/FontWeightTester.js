import { getPageTitle } from 'lib/common';

import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FontWeightTester extends Component {
  static propTypes = {
    family: PropTypes.string,
    onUpdateFamily: PropTypes.func,
  };

  static defaultProps = {
    family: 'Avenir Next',
    onUpdateFamily: /* istanbul ignore next */ () => {},
  };

  constructor(props) {
    super(props);

    /*
    ** Ugh: https://github.com/gotwarlost/istanbul/issues/690
    ** Workaround: https://github.com/gotwarlost/istanbul/issues/690#issuecomment-265718617
    */
    /* istanbul ignore next */
    this.updateFamily = this.updateFamily.bind(this);

    this.state = {
      family: props.family,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      family: nextProps.family,
    });
  }

  updateFamily(event) {
    event.preventDefault();

    let family = this.textInput.value || '';
    family = family.trim();

    if (family !== '') {
      this.setState({ family });
      this.props.onUpdateFamily(family);
    }

    this.textInput.value = family;
  }

  render() {
    const textStyle = {
      fontFamily: this.state.family,
    };

    return (
      <div id="font-weight-tester">
        <div className="page-content-header">
          <DocumentTitle title={getPageTitle('Font weight tester')}>
            <h1>Font weights: 100–900</h1>
          </DocumentTitle>
        </div>

        <div className="module">
          <p className="instructions">
            Ever wondered how weights of a font map to CSS font weights? Here’s a little utility to
            help you out. Just add the name of a font family (that you have installed, of course)
            in the form below, click
            <em> Try it out</em>, <em>et voilà</em>.
          </p>

          <form className="choose-family" onSubmit={this.updateFamily}>
            <input
              type="text"
              className="family"
              placeholder="Font family name, e.g. Helvetica"
              autoCapitalize="words"
              ref={(input) => { this.textInput = input; }}
            />
            <button>Try it out</button>
          </form>

          <div className="displayed-font" style={textStyle}>
            <p className="family-under-test">{this.state.family}</p>

            <p className="w100">
              Deserunt scenester fingerstache, kogi slow-carb 3 wolf moon id exercitation sartorial
              sriracha.
            </p>

            <p className="w200">
              Fashion axe nihil non irony sunt food truck forage, bicycle rights disrupt messenger
              bag wolf brunch vegan.
            </p>

            <p className="w300">
              Anim nesciunt yuccie, iPhone non vinyl distillery cliche blue bottle fugiat irony
              cardigan bicycle rights odio.
            </p>

            <p className="w400">
              DIY placeat accusamus, single-origin coffee vinyl sapiente fingerstache nostrud elit
              intelligentsia.
            </p>

            <p className="w500">
              Man bun meditation laborum typewriter aliqua green juice.
            </p>

            <p className="w600">
              Knausgaard mlkshk reprehenderit, nesciunt ugh craft beer eu sint health goth lomo. Est
              affogato polaroid selfies truffaut next level.
            </p>

            <p className="w700">
              Culpa nisi consequat nesciunt kale chips, jean shorts kogi.
            </p>

            <p className="w800">
              Yuccie non minim, taxidermy cronut before they sold out ullamco tousled reprehenderit
              occupy pabst.
            </p>

            <p className="w900">
              Tousled stumptown tempor celiac cornhole chillwave.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FontWeightTester;
