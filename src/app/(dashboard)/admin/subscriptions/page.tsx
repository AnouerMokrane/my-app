import DeleteSub from "@/components/DeleteSub";
import { connectDB } from "@/lib/dbConnect";
import { Subscription } from "@/lib/models/SubscriptionModel";
import { ISUb } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    return <h1 className="text-xl font-semibold">Unauthorized</h1>;
  }
  if (sessionClaims.metadata.role !== "admin") {
    return (
      <>
        <h1 className="text-xl font-semibold">Unauthorized</h1>
        <p className="text-sm text-gray-500">
          You are not authorized to view this page.
        </p>
        <p className="text-sm text-gray-500">
          Please contact the admin if you think this is a mistake.
        </p>
      </>
    );
  }
  await connectDB();

  const subscriptions: ISUb[] = await Subscription.find();

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
