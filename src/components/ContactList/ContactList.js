import { connect } from 'react-redux';
import actions from '../../redux/actions';
import PropTypes from 'prop-types';
import './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisiblesContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisiblesContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
