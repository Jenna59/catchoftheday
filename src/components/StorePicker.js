import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

/* All of our components are going to be classes
Our class is extending the React component
Render is the method that determines which DOM elements are output to the page */
class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  };
  // we are handling the form submission in JS on client-side, not on server-side

  /* we declare a property on the component. The property can be bound to an instance. The arrow function 
  allows us to bind the value of "this" to the StorePicker component */
  goToStore = event => {
    // event.preventDefault() will stop the page from reloading on form submission
    event.preventDefault();
    // get the text from the input
    const storeName = this.myInput.current.value;
    // change the page route to /store/whatevertheuserentered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

/* make it exportable to other files */
export default StorePicker;
