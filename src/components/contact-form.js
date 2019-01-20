import React from 'react';
// import redux-form {reduxForm, Field}
import {reduxForm, Field} from 'redux-form';
// change component to a class
export class ContactForm extends React.Component {
    // onSubmit method to console.log values
    onSubmit(values) {
      console.log(values);
    }
    // render function
    render() {
      // add onSubmit method to form tag
      // change input fields to Field and add component=""
      return (
          <form
            onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
            )}
          >
              <label htmlFor="name">Your Name</label>
              <Field type="text" id="name" name="name" component="input" />
              <label htmlFor="email">Email address</label>
              <Field type="email" id="email" name="email" component="input" />
              <label htmlFor="message">Message</label>
              <Field id="message" name="message" component="textarea"/>
              <button type="submit">Submit</button>
          </form>
      );
    }

}

// export default reduxForm({form: ''})(Component-Name)
export default reduxForm({
  form: 'contact'
})(ContactForm);


//
// export default function ContactForm() {
//     return (
//         <form>
//             <label htmlFor="name">Your Name</label>
//             <input type="text" id="name" name="name" />
//             <label htmlFor="email">Email address</label>
//             <input type="email" id="email" name="email" />
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" />
//             <button>Submit</button>
//         </form>
//     );
// }
