import { Check, SquarePen } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../../../components/reusable/Button";
import useFetch from "../../../hooks/useFetch";
import Table from "../../../components/reusable/Table";

function ApprovedPayment() {
  const navigate = useNavigate();
  const { data: tableData, loading, error } = useFetch("data6.json");
  const truthVal = false;

  const columns = [
    {
      header: "Transaction Reference",
      accessor: "TransactionRef",
    },
    {
      header: "Company Account Number",
      accessor: "CompanyNumber",
    },
    {
      header: "Company Account Name",
      accessor: "CompanyName",
    },
    {
      header: "Beneficiary Name",
      accessor: "BeneficiaryName",
    },
    {
      header: "Total Amount",
      accessor: "TotalAmount",
      render: (value) =>
        typeof value === "number"
          ? value.toLocaleString("en-US", { minimumFractionDigits: 2 })
          : value,
    },
    {
      header: "Date",
      accessor: "Date",
    },
    {
      header: "TransactionType",
      accessor: "TransactionType",
    },
  ];

  if (loading)
    return (
      <div className="p-6 text-gray-500 font-medium animate-pulse">
        Loading transaction dashboard...
      </div>
    );
  if (error)
    return <div className="p-6 text-red-500">Error loading data: {error}</div>;

  const handleDetail = (row) =>
    alert(`Viewing details for: ${row.TransactionRef}`);

  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl font-normal text-gray-700 tracking-tight">
        Approve Transaction Pending List
      </h2>

      {truthVal && (
        <div className="p-3 bg-green-50 rounded-md border border-green-200">
          <p className="text-sm text-green-700 flex items-center gap-2">
            <Check size={16} /> Transaction Authorize successfully
          </p>
        </div>
      )}

      <div className="">
        <div className="py-3 pl-4 rounded-t bg-fuchsia-800 text-white text-sm">
          <p>Pending Transactions for you approval</p>
        </div>
        <Table
          columns={columns}
          data={tableData}
          rowKey="TransactionRef"
          renderActions={(row) => (
            // flex flex-wrap gap-2 max-w-[240px]
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-20">
              <Button
                className="px-3 py-2.5"
                variant="success"
                label="Approve"
                icon={<SquarePen size={12} />}
                onClick={() => navigate("/dashboard/approve-otp")}
              />
              <Button
                className="px-3 py-2.5"
                variant="success"
                label="Detail"
                icon={<SquarePen size={12} />}
                onClick={() => handleDetail(row)}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default ApprovedPayment;
