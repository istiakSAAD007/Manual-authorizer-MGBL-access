import { FileText } from "lucide-react";
import Button from "../../../components/reusable/Button";

function TransactionReport() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-normal text-zinc-600 mb-8 tracking-tight">
        Transaction Report
      </h2>

      {/* Filters Form Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        {/* Company Account Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Company Account
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>United Savings [ AC:110111100001138 ]</option>
          </select>
        </div>

        {/* Transaction Status Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Transaction Status
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>Please select status</option>
          </select>
        </div>

        {/* Transaction Type Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Transaction Type
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>BEFTN</option>
          </select>
        </div>

        {/* Transaction Date Type Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Transaction Date Type
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>Creation Date</option>
          </select>
        </div>

        {/* From Date Picker */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">From Date</label>
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm"
          />
        </div>

        {/* To Date Picker */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">To Date</label>
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm"
          />
        </div>
      </div>

      {/* table header */}
      <div className="border border-zinc-200 rounded shadow-sm bg-white overflow-hidden">
        <div className="bg-[#eaeaea] border-b border-zinc-300 px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-700">
            Transaction Detail
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
                  Transaction Date
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Company Account
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Beneficiary Name
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Beneficiary Account
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Ref. Num
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">Amount</th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Payment Type
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">Status</th>
                <th className="px-3 py-2.5 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-2 py-2 border-r border-zinc-200 text-center">
                  1
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/2023
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  110111100001138
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600">
                  Rajib Bin Ahmed
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  2251401976001
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  5,000.00
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  BEFTN
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  CANCELLED
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<FileText size={12} />}>
                    Print
                  </Button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="bg-white border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-3 py-2 border-r border-zinc-200 text-center">
                  2
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/2023
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  110111100001138
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600">
                  Zillur Rahman
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  2251401976001
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  6,000.00
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  BEFTN
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  CANCELLED
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<FileText size={12} />}>
                    Print
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionReport;
