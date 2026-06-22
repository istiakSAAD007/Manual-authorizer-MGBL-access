import Button from "../../../components/reusable/Button";

function VirtualAccountReport() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-normal text-zinc-600 mb-8 tracking-tight">
        Virtual Account Report
      </h2>

      {/* Filters Form Container */}
      <div className="mb-8">
        {/* Company Account Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Company Account
          </label>
          <select className="w-6/12 bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>
              Akij Bicycle And Engineering LTD. [ AC:110111100001138 ]
            </option>
          </select>
        </div>
      </div>

      {/* table header */}
      <div className="border border-zinc-200 rounded shadow-sm bg-white overflow-hidden">
        <div className="bg-[#eaeaea] border-b border-zinc-300 px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-700">
            Virtual Account Detail
          </span>
          <Button
            variant="primary"
            className="px-4 py-2 font-medium tracking-wide"
          >
            Search
          </Button>
        </div>

        {/* use map method for loop the table row through api */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-zinc-700 border-collapse">
            <thead>
              <tr className="bg-white border-b border-zinc-300 text-zinc-600 font-bold">
                <th className="px-2 py-2.5 border-r border-zinc-200 text-center">
                  S/L
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  MGBL Account
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">Prefix</th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Virtual Account Name
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Virtual Account
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Virtual Account Type
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-gray-200 border-b border-zinc-200 transition-colors">
                <td className="px-2 py-2 border-r border-zinc-200 text-center">
                  1
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  110111100001138
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600">
                  0071
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  Akij Bicycle And Engineering LTD
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  Distributor
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  AUTHORIZED
                </td>
              </tr>
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 transition-colors">
                <td className="px-2 py-2 border-r border-zinc-200 text-center">
                  1
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  110111100001138
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600">
                  0071
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  Akij Bicycle And Engineering LTD
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  Distributor
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  AUTHORIZED
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VirtualAccountReport;
