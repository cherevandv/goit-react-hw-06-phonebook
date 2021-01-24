import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import './ContactList.module.css';

export default function ContactList() {
  const contactsBook = useSelector(({ contacts: { items, filter } }) =>
    getVisiblesContacts(items, filter),
  );

  const dispatch = useDispatch();

  function getVisiblesContacts(allContacts, filter) {
    const normalizeFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }

  return (
    <ul>
      {contactsBook.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const getVisiblesContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisiblesContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
