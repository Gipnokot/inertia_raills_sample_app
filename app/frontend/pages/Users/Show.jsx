import { Link } from "@inertiajs/react";

export default function Show({ user }) {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-700">{user.name}</h1>
      <p className="text-gray-600 text-center">{user.email}</p>
      <p className="mt-2 p-2 bg-gray-100 rounded">{user.bio || "No bio provided"}</p>

      <div className="mt-4 flex justify-between">
        <Link
          href={`/users/${user.id}/edit`}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </Link>
        <Link
          as="button"
          method="delete"
          href={`/users/${user.id}`}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
