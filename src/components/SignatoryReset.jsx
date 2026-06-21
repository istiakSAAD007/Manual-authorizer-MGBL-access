import { useNavigate } from "react-router";
import Button from "./reusable/Button";

function SignatoryReset() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="border border-zinc-200 rounded shadow-sm rounded-t">
        {/* company account */}
        <div className="border border-zinc-200 rounded-t shadow-sm mx-7 my-5">
          <div className="bg-fuchsia-800 border-b border-zinc-200 px-4 py-2.5">
            <span className="text-sm font-medium text-white">
              Company Account
            </span>
          </div>

          <section className="p-6 space-y-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <tbody>
                  <tr className="border border-gray-200 text-gray-600 text-sm">
                    <td className="text-left px-5 py-3 w-1/2 bg-gray-200/70 border-r border-gray-200">
                      900720600000001
                    </td>
                    <td className="text-left px-5 py-3 w-1/2 bg-gray-200/70">
                      AKIJ BICYCLE ENGINEERING LTD.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* signatory */}
        <div className="border border-zinc-200 rounded-t shadow-sm mx-7 mb-5">
          <div className="bg-fuchsia-800 border-b border-zinc-200 px-4 py-2.5">
            <span className="text-sm font-medium text-white">Signatory</span>
          </div>

          {/*signatory  */}
          <section className=" space-y-6">
            <div className="overflow-x-auto bg-white">
              {/* container */}
              <div>
                <span className="inline-block bg-gray-300 px-4 py-5">
                  Signatory Set - One
                </span>
              </div>

              {/* table */}
              <div className="px-6 py-2">
                <div className="max-w-112.5">
                  <table className="min-w-full text-left whitespace-nowrap">
                    <thead className="border-b-2 border-gray-300 border-t">
                      <tr>
                        <th
                          scope="col"
                          className="px-0.5 border-x border-gray-300"
                        ></th>
                        <th
                          scope="col"
                          className="px-4 py-2 border-x border-gray-300"
                        >
                          Group Name: C
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-300 bg-gray-200">
                        <td
                          scope="row"
                          className="border-x border-gray-300 pl-2"
                        >
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td
                          scope="row"
                          className="px-4 py-2 border-x border-gray-300"
                        >
                          Proimol Chanda Sharkar
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* button container */}
        <div className="px-6 mb-5 flex items-center gap-2">
          <Button
            className="px-3.5 py-2.5"
            variant="primary"
            label="Submit"
            onClick={() => navigate("/dashboard/payment/unapproved-payment")}
          />
          <Button
            className="px-3.5 py-2.5"
            variant="danger"
            label="Cancel"
            onClick={() => {}}
          />
          <Button
            className="px-3.5 py-2.5"
            variant="normal"
            label="Reset"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default SignatoryReset;
