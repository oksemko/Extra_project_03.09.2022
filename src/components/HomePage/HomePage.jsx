import { useSelector } from 'react-redux/es/exports';
import { getUsers } from 'components/redux/users/selector';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact, updateStatus } from 'components/redux/users/actions';
export const HomePage = () => {
  const users = useSelector(getUsers);
    const dispatch = useDispatch();
    

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map(({ name, avatar, age, status, id }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{avatar[0].toUpperCase()}</td>
              <td>{name}</td>
              <td>{age}</td>
                  <td onClick={() => dispatch(updateStatus(id))}>{status === 'yes' ? 'online' : 'offline'}</td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
