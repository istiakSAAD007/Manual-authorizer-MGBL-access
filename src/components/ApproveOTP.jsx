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
    return <div className="p-6 text-red-500">Error loading data: {error}</div>;

  return (
    <div>
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

        <div className="border border-zinc-200 rounded-t shadow-sm mx-7 mb-5">
          <div className="bg-fuchsia-800 border-b border-zinc-200 px-4 py-2.5">
            <span className="text-sm font-medium text-white">
              Authentication Token
            </span>
          </div>

          {/*signatory  */}
          <section className="p-6 space-y-6">
            <div className="overflow-x-auto grid grid-flow-col h-30">
              <aside className="col-span-1 border border-gray-400 bg-gray-200 p-5 text-gray-600">
                SMS/Email OTP
              </aside>
              <aside className="col-span-2 border border-gray-400 p-5">
                <div>
                  <p>Please select your OTP</p>
                  <input type="radio" name="otp_type_sms" id="sms" />
                  <label htmlFor="sms">SMS</label>

                  <input type="radio" name="otp_type_sms" id="email" />
                  <label htmlFor="email">SMS</label>
                </div>
                <div>
                  <button>Generate OTP</button>
                </div>
                <div>
                  <label htmlFor="generateOTP">Token Code</label>
                  <input
                    type="text"
                    name="otp"
                    id="generateOTP"
                    placeholder="token"
                    className="border border-gray-300"
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
            label="Confirm"
            onClick={() => navigate("/dashboard")}
          />
          <Button
            className="px-3.5 py-2.5"
            variant="danger"
            label="Back"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default AddSignatory;
