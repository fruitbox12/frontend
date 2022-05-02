import React from 'react';

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-9/12 h-auto py-3">
      <ul className="w-full text-gray-600">
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
          <svg x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(4.768658190542342 1.137677215507033) rotate(71.4 12 12)" fill="#018E7B"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-4.959092301375713 6.701755734896874) rotate(155.9 12 12)" fill="#FB1886"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-16.777162286954773 3.670020726774048) rotate(317.1 12 12)" fill="#035E5C"></rect></svg>
          </div>
          <div>
            <p className="text-sm font-semibold">ens.eth</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src=""
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold"></p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src=""
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold"></p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src=""
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Memories</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Pages</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Groups</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;