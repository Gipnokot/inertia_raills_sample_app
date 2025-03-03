import { Link } from "@inertiajs/react";

export default function Index({ users }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-700">Users</h1>

      <div className="text-right">
        <Link
          href="/users/new"
          className="inline-block bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          + Add User
        </Link>
      </div>

      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
            <Link href={`/users/${user.id}`} className="text-blue-500 font-semibold">
              {user.name}
            </Link>
            <Link
              href={`/users/${user.id}/edit`}
              className="text-yellow-500 hover:underline"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
