import { Route, Routes } from "react-router";
import DashboardLayout from "./Layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/HomePage";

import ApproveOTP from "./components/ApproveOTP";
import SignatoryReset from "./components/SignatoryReset";
import ApprovedPayment from "./pages/dashboard/Payment/ApprovedPayment";
import ApprovePaymentHistory from "./pages/dashboard/Report/ApprovePaymentHistory";
import PaymentHisotry from "./pages/dashboard/Report/PaymentHisotry";
import TransactionReport from "./pages/dashboard/Report/TransactionReport";
import UnApprovedPaymentHistory from "./pages/dashboard/Report/UnApprovedPaymentHistory";
import UnAuthorizedPaymentHistory from "./pages/dashboard/Report/UnAuthorizedPaymentHistory";
import VirtualAccountPaymentHistory from "./pages/dashboard/Report/VirtualAccountPaymentHistory";
import VirtualAccountReport from "./pages/dashboard/Report/VirtualAccountReport";
import Summary from "./pages/dashboard/users/Summary";
import VirtualAccount from "./pages/dashboard/VirtualAccount/VirtualAccount";

function App() {
  return (
    <main className="min-h-screen">
      <section>
        <Routes>
          {/* login home page */}
          <Route path="/" element={<HomePage />} />

          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />

            {/* Payment Routes */}
            <Route path="payment">
              <Route path="approved-payment" element={<ApprovedPayment />} />
            </Route>

            {/* Virtual Account Routes */}
            <Route path="virtual-account" element={<VirtualAccount />} />

            {/* User Summary */}
            <Route path="users">
              <Route path="summary" element={<Summary />} />
            </Route>

            {/* Virtual account */}
            <Route path="virtual">
              <Route path="account-management" element={<VirtualAccount />} />
            </Route>

            {/* Report Routes */}
            <Route path="report">
              <Route
                path="transaction-status"
                element={<TransactionReport />}
              />
              <Route path="va-history" element={<VirtualAccountReport />} />
              <Route
                path="va-payment-history"
                element={<VirtualAccountPaymentHistory />}
              />
              <Route path="payment-history" element={<PaymentHisotry />} />
              <Route
                path="unauthorized"
                element={<UnAuthorizedPaymentHistory />}
              />
              <Route path="unapproved" element={<UnApprovedPaymentHistory />} />
              <Route path="approved" element={<ApprovePaymentHistory />} />
            </Route>

            {/* Add signatory */}
            <Route path="approve-otp" element={<ApproveOTP />} />

            <Route path="update-signatory" element={<SignatoryReset />} />
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default App;
