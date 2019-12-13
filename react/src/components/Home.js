import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Cards from '../components/Cards';
import useScript from '../hooks/useScript';

import { setInputField } from '../actions';

const mapStateToProps = state => {
  return {
    inputField: state.inputField
  }
}
const mapDispatchToProps = dispatch => {

  return {
    onInputChange: (event) => dispatch(setInputField(event.target.value))
  }
}

const Home = props => {
    useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
    // useEffect(() =>  {
    //     window.$('[data-toggle="tooltip"]').tooltip();
    //   })
    const { onInputChange } = props;

    return (
        <div>
            <Header />
            <Cards inputChange={onInputChange} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);