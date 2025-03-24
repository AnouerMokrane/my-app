import DeleteSub from "@/components/DeleteSub";
import { ISUb } from "@/lib/types";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscribers`,
    {
      next: { revalidate: 0, tags: ["subscribers"] },
    }
  );
  const subscriptions: ISUb[] = await res.json();

  if (!subscriptions.length) {
    return <h1 className="text-xl font-semibold">No Subscribers</h1>;
  }
  return (
    <>
      <h1 className="text-2xl font-medium mb-4">Subscriptions</h1>
      <div className="overflow-x-auto max-w-2xl max-h-[60vh] pb-2 custom-scrollbar border border-gray-400">
        <table className="min-w-full  bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {subscriptions.map((subscription) => (
              <tr
                key={subscription._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left border-r border-gray-200">
                  {subscription.email}
                </td>
                <td className="py-3 px-6 text-left w-20">
                  <DeleteSub email={subscription.email} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
