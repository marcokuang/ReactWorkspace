import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // after refactoring to StreamForm componenet, the onSumit method will be
  // a call-back function from the props
  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // redex form provides a handleSubmit method to be called any time
      // the form will be submitted

      // the Field from redux form will not care what component it is rendering
      // make sure to use component attr to link to a React component
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

// the validate will use the same Field name to populate the error messages
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({ form: "StreamForm", validate: validate })(
  StreamForm
);
