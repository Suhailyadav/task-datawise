import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    LoggedInAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://68708d3d7ca4d06b34b72489.mockapi.io/api/v1/users', formData);
      alert('User submitted successfully!');
      setFormData({ name: '', email: '', LoggedInAt: new Date().toISOString() });
    } catch (err) {
      console.error('Error submitting user:', err);
      alert('Submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded w-full space-y-4 mt-6">
      <h2 className="text-xl font-bold">Add User</h2>

      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Logged In At:</label>
        <input
          type="datetime-local"
          name="LoggedInAt"
          value={new Date(formData.LoggedInAt).toISOString().slice(0, 16)}
          onChange={(e) => setFormData({ ...formData, LoggedInAt: new Date(e.target.value).toISOString() })}
          className="border px-3 py-2 rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
