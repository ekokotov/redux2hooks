import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Alert from '../components/alert';
import FormInput from '../components/input';
import {login as signIn} from "../store/auth/actions";
import {connect} from "../../src";
import Octicon, {LogoGithub} from "@githubprimer/octicons-react";

function Login(props) {
  const username = React.createRef();
  const password = React.createRef();

  const submit = async event => {
    event.preventDefault();
    event.stopPropagation();
    await props.login({username: username.current.value, password: password.current.value});
    props.history.push('/');
  };

  return (
    <div className="d-flex h-100">
      <form className="container col-lg-4 justify-content-center align-self-center border border-info rounded jumbotron"
            onSubmit={submit}>
        <div className="text-center">
          <Octicon icon={LogoGithub} size='large'/>
          {props.inProgress ?
            <div>
              <p><span className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="sr-only">in Progress...</span>
          </span> Please sign in</p>
            </div> :
            <p>Please sign in</p>}
        </div>
        {props.error && <Alert message={props.error} type="danger"/>}
        <FormInput label="Username" type="email" ref={username} required={true}/>
        <FormInput label="Password" type="password" ref={password} required={true}/>
        <button className="btn btn-lg btn-primary btn-block"><i className="fas fa-sign-in-alt"/> Log in</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  errors: PropTypes.object,
  inProgress: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(state => ({
    error: state.auth.error,
    inProgress: state.auth.inProgress
  }),
  {
    login: signIn
  })(withRouter(Login));
