import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  FileText,
  Landmark,
  LayoutDashboard,
  SquarePen,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import BubbleImage from "../assets/neuron-image.jpg";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    // dashboard
    {
      name: "Dashboard",
      path: "/dashboard",
      exact: true,
      icon: <LayoutDashboard size={18} />,
    },
    // payment
    {
      name: "Payment",
      path: "/dashboard/payment",
      icon: <CreditCard size={18} />,
      subItems: [
        {
          name: "Approved Payment",
          path: "/dashboard/payment/approved-payment",
          icon: <SquarePen size={16} />,
        },
      ],
    },
    // virtual account management
    {
      name: "Virtual Account Management",
      path: "/dashboard/virtual",
      icon: <Landmark size={18} />,
      subItems: [
        {
          name: "Account",
          path: "/dashboard/virtual/account-management",
          icon: <SquarePen size={16} />,
        },
      ],
    },
    // user
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Users size={18} />,
      subItems: [
        {
          name: "Summary",
          path: "/dashboard/users/summary",
          icon: <SquarePen size={16} />,
        },
      ],
    },
    // report
    {
      name: "Report",
      path: "/dashboard/report",
      icon: <FileText size={18} />,
      subItems: [
        {
          name: "Transaction Status",
          path: "/dashboard/report/transaction-status",
          icon: <SquarePen size={16} />,
        },
        {
          name: "Virtual Account History",
          path: "/dashboard/report/va-history",
          icon: <SquarePen size={16} />,
        },
        {
          name: "Virtual Account Payment History",
          path: "/dashboard/report/va-payment-history",
          icon: <SquarePen size={16} />,
        },
        {
          name: "Payment History",
          path: "/dashboard/report/payment-history",
          icon: <SquarePen size={16} />,
        },
        {
          name: "UnAuthorized Payment History",
          path: "/dashboard/report/unauthorized",
          icon: <SquarePen size={16} />,
        },
        {
          name: "UnApproved Payment History",
          path: "/dashboard/report/unapproved",
          icon: <SquarePen size={16} />,
        },
        {
          name: "Approved Payment History",
          path: "/dashboard/report/approved",
          icon: <SquarePen size={16} />,
        },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        // Pass the image URL as a CSS custom variable
        style={{ "--bg-image": `url(${BubbleImage})` }}
        className={`
          fixed top-14 left-0
          h-[calc(100vh-56px)]
          w-70 border-r border-gray-200 z-40
          transition-transform duration-300 ease-in-out
          flex flex-col bg-white
          before:content-['']
          before:absolute before:inset-0 before:z-0
          before:bg-[image:var(--bg-image)]
          before:bg-no-repeat before:bg-bottom before:bg-contain
          before:opacity-20 

          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Scrollable Navigation section */}
        <div className="flex-1 overflow-y-auto min-h-0 z-10 relative">
          {/* Company Header - Sticks to the top */}
          <div className="p-4 border-b border-gray-100 flex flex-col items-center sticky top-0 bg-white z-20">
            <div className="h-10 w-10 border border-gray-300 rounded mb-2 bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">
              LOGO
            </div>
            <h3 className="text-base font-medium text-center text-forestgreen tracking-wider leading-tight w-3/4">
              AKIJ BICYCLE AND ENGINEERING LTD.
            </h3>
          </div>

          {/* Navigation Items */}
          <nav className="py-2 pb-6 relative z-10">
            {menuItems.map((item, idx) => {
              const isParentActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);

              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = openMenus[item.name];

              return (
                <div key={idx}>
                  {/* Parent Menu Item */}
                  {hasSubItems ? (
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className={`
                        w-full flex items-center justify-between
                        px-4 py-3 text-sm text-left transition-colors group outline-none
                        ${
                          isParentActive
                            ? "text-red-600 bg-red-100/70 border-l-4 border-red-600 font-medium"
                            : "text-gray-700 hover:bg-gray-100/50 border-l-4 border-transparent"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            isParentActive
                              ? "text-red-600"
                              : "text-gray-400 group-hover:text-gray-600"
                          }
                        >
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown
                          size={16}
                          className={
                            isParentActive ? "text-red-600" : "text-gray-400"
                          }
                        />
                      ) : (
                        <ChevronRight
                          size={16}
                          className={
                            isParentActive ? "text-red-600" : "text-gray-400"
                          }
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        w-full flex items-center justify-between
                        px-4 py-3 text-sm text-left transition-colors group
                        ${
                          isParentActive
                            ? "text-red-600 bg-red-100/70 border-l-4 border-red-600 font-medium"
                            : "text-gray-700 hover:bg-gray-100/50 border-l-4 border-transparent"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            isParentActive
                              ? "text-red-600"
                              : "text-gray-400 group-hover:text-gray-600"
                          }
                        >
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  )}

                  {/* Render Sub-menu items if expanded */}
                  {hasSubItems && isExpanded && (
                    <div className="bg-gray-100/30 flex flex-col py-1">
                      {item.subItems.map((sub, subIdx) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={subIdx}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={`
                              pl-12 pr-4 py-2 text-sm transition-colors
                              ${
                                isSubActive
                                  ? "text-red-600 font-semibold"
                                  : "text-gray-600 hover:text-gray-900"
                              } flex items-center gap-1
                            `}
                          >
                            <span>{sub.icon}</span>
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
