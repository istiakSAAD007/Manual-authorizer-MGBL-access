function Table({ columns, data = [], renderActions, rowKey }) {
  return (
    <div className="overflow-x-auto bg-white rounded-md border border-gray-200 shadow-sm">
      <table className="min-w-full text-left text-sm whitespace-nowrap border-collapse">
        <thead className="border border-gray-200 bg-gray-100 font-semibold text-gray-700">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-2 py-4 border-r border-gray-200 text-wrap"
              >
                {column.header}
              </th>
            ))}

            {renderActions && (
              <th className="px-2 py-4 text-center">Actions</th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 text-gray-600">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (renderActions ? 1 : 0)}
                className="text-center py-8 text-gray-400"
              >
                No data found.
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={rowKey ? row[rowKey] : index}
                className={`${index % 2 !== 0 ? "bg-gray-200" : "bg-white"}`}
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="px-2 py-6 border-r border-gray-100 align-middle"
                  >
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : row[column.accessor]}
                  </td>
                ))}

                {renderActions && (
                  <td className="px-4 py-1 align-middle bg-white">
                    {renderActions(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
