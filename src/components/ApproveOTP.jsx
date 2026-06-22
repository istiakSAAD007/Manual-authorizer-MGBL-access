import useFetch from "../hooks/useFetch";
import { signatoryTable } from "../assets/VariableAssist";
import Button from "./reusable/Button";
import { useNavigate } from "react-router";

function AddSignatory() {
  const navigate = useNavigate();
  const { data: userInfo, loading, error } = useFetch("data2.json");

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
      <div className="mb-10 flex flex-col gap-1">
        <h1 className="text-3xl text-gray-700">Approve Transaction</h1>
        <p className="text-gray-500 text-sm italic">
          Waiting for your approval
        </p>
      </div>

      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-blue-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600">
            Transaction Detail
          </span>
        </div>

        {/* Form Fields Body */}
        <section className="p-6 space-y-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                {signatoryTable.map((item, index) => (
                  <tr
                    className={`text-sm ${index % 2 === 0 ? "bg-gray-200" : ""} border border-gray-200 text-gray-600`}
                  >
                    <td className="text-left px-5 py-3 w-1/2 border-r border-gray-200">
                      {item.head}
                    </td>
                    <td className="text-left px-5 py-3 w-1/2">
                      {userInfo[index] ? userInfo[index].info : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="border border-zinc-200 rounded-t shadow-sm mx-7 mb-5 pb-5">
          <div className="bg-fuchsia-800 border-b border-zinc-200 px-4 py-2.5">
            <span className="text-sm font-medium text-white">
              Authentication Token
            </span>
          </div>

          {/*signatory  */}
          <section className="p-6 space-y-6">
            <div className="grid grid-flow-col h-30">
              <aside className="col-span-1 border border-gray-300 bg-gray-200/70 p-5 text-gray-600">
                SMS/Email OTP
              </aside>
              <aside className="col-span-2 border border-gray-300 p-5 space-y-4">
                <div className="flex items-center text-xs text-gray-600 space-x-1.5">
                  <p className="">Please Select Your OTP:</p>
                  <input type="radio" name="otp_type_sms" id="sms" />
                  <label htmlFor="sms">SMS</label>

                  <input type="radio" name="otp_type_sms" id="email" />
                  <label htmlFor="email">SMS</label>
                </div>

                <div>
                  <Button>Generate OTP</Button>
                </div>

                <div className="flex items-center space-x-3">
                  <label
                    htmlFor="generateOTP"
                    className="text-xs text-gray-600"
                  >
                    Token Code
                  </label>
                  <input
                    type="password"
                    name="otp"
                    id="generateOTP"
                    placeholder="token"
                    className="border border-gray-300 text-lg text-gray-700 rounded bg-transparent pl-3 w-40 transition duration-300 ease focus:outline-none focus:border-blue-400 focus:shadow-sm shadow-sm placeholder:text-base"
                  />
                </div>
              </aside>
            </div>
          </section>
        </div>

        {/* button container */}
        <div className="px-6 mb-5 flex items-center gap-2">
          <Button
            className="px-3.5 py-2.5"
            variant="primary"
            label="Approve"
            onClick={() => navigate("/dashboard")}
          />
          <Button
            className="px-3.5 py-2.5"
            variant="danger"
            label="Reject"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default AddSignatory;
