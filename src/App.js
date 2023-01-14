import { useState } from "react";
import userData from './data.json';

function App() {
  const [data, setData] = useState(userData);
  const [selectedId, setSelectedId] = useState('');

  const sorting = (sorting) => {
    if (sorting === 'Ascending') {
      const sorted = [...data].sort((a, b) =>
        a['first_name'].toLowerCase() > b['first_name'].toLowerCase() ? 1 : -1
      );
      setData(sorted);
    }
    if (sorting === 'Descending') {
      const sorted = [...data].sort((a, b) =>
        a['first_name'].toLowerCase() < b['first_name'].toLowerCase() ? 1 : -1
      );
      setData(sorted);
    }
  }

  const handleRowColorChange = (id) => {
    setSelectedId(id);
  }

  return (
    <>
      <div className="relative overflow-x-auto max-w-[600px] mx-auto my-10">
        <table className="sm:w-[600px] w-[500px] sm:mx-0 mx-2 text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th></th>
              <th className="flex items-center">First Name
                <div className="dropdown dropdown-bottom ml-5">
                  <label tabIndex={0} className="m-1 cursor-pointer">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => sorting('Ascending')}>
                      <a>Ascending</a>
                    </li>
                    <li onClick={() => sorting('Descending')}>
                      <a>Descending</a>
                    </li>
                  </ul>
                </div>
              </th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {
              data?.map((data, i) => (
                <tr key={data.id} onClick={() => handleRowColorChange(data.id)} className={`${data.id === selectedId && '!bg-teal-400'} cursor-pointer`}>
                  <th>{i + 1}</th>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.gender}</td>
                  <td className={`${data.status === 'true' ? 'text-green-600' : 'text-red-600'}`}>{data.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
