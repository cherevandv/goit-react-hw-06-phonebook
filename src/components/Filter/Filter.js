import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="..."
        value={value}
        onChange={e => dispatch(actions.filter(e.currentTarget.value))}
      ></input>
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.filter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
