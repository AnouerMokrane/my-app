import { getSubscriptions } from "@/lib/actions";
import React from "react";

export default async function Page() {
  const subscriptions = await getSubscriptions();
  if (!subscriptions) {
    return <h1 className="text-xl font-semibold">No Subscribers</h1>;
  }
  return (
    <>
      <h1 className="text-2xl font-medium mb-4">Subscriptions</h1>
      <div className="overflow-x-auto max-w-4xl">
        <table className="min-w-full table-auto bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {subscriptions?.data?.map((subscription) => (
              <tr
                key={subscription.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left border-r border-gray-200">
                  {subscription.email}
                </td>
                <td className="py-3 px-6 text-left">
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
