import { SquarePen } from "lucide-react";
import Button from "../../../components/reusable/Button";

function ApprovePaymentHistory() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-normal text-zinc-700 mb-8 tracking-tight">
        Approved Transaction Report
      </h2>

      {/* Filters Form Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        {/* Select company */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Select Company
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>AKIJ BICYCLE AND ENGINEERING LTD.</option>
          </select>
        </div>

        {/* Company account */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Company Account
          </label>
          <select className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-blue-400 shadow-sm">
            <option>Please select company account</option>
          </select>
        </div>

        {/* Transaction data type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-normal text-zinc-600">
            Transaction Data Type
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
              <tr className="bg-white border-b border-zinc-300 text-zinc-800 font-bold">
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Transaction Date
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Company Account
                </th>
                <th className="px-2 py-2.5 border-r border-zinc-200 text-center">
                  #of Transaction
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Total Amount
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Ref. Num
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200">
                  Payment Type
                </th>
                <th className="px-3 py-2.5 border-r border-zinc-200"></th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/23
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  11
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  55,000
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  BEFTN
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<SquarePen size={12} />}>
                    Detail
                  </Button>
                </td>
              </tr>
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/23
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  11
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  55,000
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  BEFTN
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<SquarePen size={12} />}>
                    Detail
                  </Button>
                </td>
              </tr>
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/23
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  11
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  55,000
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  BEFTN
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<SquarePen size={12} />}>
                    Detail
                  </Button>
                </td>
              </tr>
              <tr className="bg-[#f9f9f9] border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21/08/23
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-600 font-medium">
                  11
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500">
                  55,000
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  21082310508735
                </td>
                <td className="px-3 py-2 border-r border-zinc-200 text-zinc-500 font-medium text-amber-600">
                  BEFTN
                </td>
                <td className="px-3 py-2 text-center">
                  <Button variant="success" icon={<SquarePen size={12} />}>
                    Detail
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

export default ApprovePaymentHistory;
