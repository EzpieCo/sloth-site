export default function Download() {
  return (
    <div className="mx-14">
      <main className="text-center mt-10 px-10">
        <h1 className="text-6xl mb-5">Versions</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Version
                </th>
                <th scope="col" className="px-6 py-3">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-gray-900 border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  V1.0.1-beta
                </th>
                <td className="px-6 py-4 animate-pulse text-blue-500 font-bold">
                  <a href="/versions/v1.0.1-beta/sloth-installer.exe">
                    Download
                  </a>
                </td>
              </tr>
              <tr className="border-b bg-gray-900 border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  V1.0.0-beta
                </th>
                <td className="px-6 py-4 animate-pulse text-blue-500 font-bold">
                  <a href="/versions/v1.0.0-beta/sloth-installer.exe">
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
