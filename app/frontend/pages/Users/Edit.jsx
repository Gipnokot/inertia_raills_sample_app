import { useForm } from "@inertiajs/react";

export default function Edit({ user, errors }) {
  const { data, setData, put } = useForm({
    name: user.name,
    email: user.email,
    bio: user.bio || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/users/${user.id}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-700">Edit User</h1>

      {errors && (
        <div className="text-red-500 bg-red-100 p-2 rounded mt-2">
          {errors.join(", ")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Enter name"
        />
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData("email", e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Enter email"
        />
        <textarea
          value={data.bio}
          onChange={(e) => setData("bio", e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Tell us about yourself"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Save
        </button>
      </form>
    </div>
  );
}
