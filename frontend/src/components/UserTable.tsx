import { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        console.log(res.data)
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded w-full mt-6">
      <h2 className="text-xl font-bold mb-4">External Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border">{user.id}</td>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
