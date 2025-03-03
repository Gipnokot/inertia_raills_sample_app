import { useForm } from "@inertiajs/react";

export default function New({ errors }) {
  const { data, setData, post } = useForm({
    name: "",
    email: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/users");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-700">Create User</h1>

      {errors && (
        <div className="text-red-500 bg-red-100 p-2 rounded mt-2">
          {errors.join(", ")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Bio</label>
          <textarea
            value={data.bio}
            onChange={(e) => setData("bio", e.target.value)}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            placeholder="Tell us about yourself"
          />
        </div>

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Create
        </button>
      </form>
    </div>
  );
}
