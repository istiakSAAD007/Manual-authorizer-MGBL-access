import { userSummary } from "../../../assets/VariableAssist";
import useFetch from "../../../hooks/useFetch";

function Summary() {
  const { data: userInfo, loading, error } = useFetch("data5.json");

  if (loading)
    return (
      <div className="p-6 text-gray-500 font-medium animate-pulse">
        Loading transaction dashboard...
      </div>
    );
  if (error)
    return <div className="p-6 text-red-500">Error loading data: {error}</div>

  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Single Payment - RTGS
      </h2>

      {/* table form */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600">
            Transaction Detail
          </span>
        </div>

        {/* Form Fields Body */}
        <section className="p-6 space-y-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border border-gray-200">
                  {userSummary.map((item) => (
                    <th
                      className="text-left px-5 py-3 border-x font-medium border-gray-200 text-gray-700"
                      key={item.head}
                    >
                      {item.head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {userInfo.map((item, index) => (
                  <tr
                    className={`text-sm  border border-gray-200 text-gray-600 ${index % 2 === 0 ? "bg-gray-200/70" : ""}`}
                  >
                    <td
                      className="text-left px-5 py-3 border-r border-gray-200"
                      key={item.username}
                    >
                      {item.username}
                    </td>
                    <td className="text-left px-5 py-3 border-r border-gray-200">
                      {item.fullname}
                    </td>
                    <td className="text-left px-5 py-3 border-r border-gray-200">
                      {item.email}
                    </td>
                    <td className="text-left px-5 py-3 border-r border-gray-200">
                      {item.phone}
                    </td>
                    <td className="text-left px-5 py-3 border-r border-gray-200">
                      {item.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Summary;
