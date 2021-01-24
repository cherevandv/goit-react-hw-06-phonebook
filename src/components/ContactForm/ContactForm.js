import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsBook = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      return alert(`Some field is empty.`);
    }
    const sameName = findSameName(name);
    if (sameName) {
      formReset();
      return alert(`${name} is already in contacts.`);
    }
    dispatch(actions.addContact({ name, number }));
    // onSubmit({ name, number });
    formReset();
  };
  const findSameName = name => {
    return contactsBook.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="">
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name.."
          value={name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label className={s.label} htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number.."
          value={number}
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => {
//     return dispatch(actions.addContact(name, number));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
