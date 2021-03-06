


const CreatePostBox: React.FC = () => {
  return (
    <div className="bg-white flex flex-col p-4 px-5 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">

        <button className="focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5">

          <input
              placeholder="Connect via Private Key"
              className="focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5"/>
        </button>
      </div>
      <div className="flex space-x-4 font-thin text-sm text-gray-600 -mb-1">
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <i className="fas fa-chevron-up"></i>
          </div>
          <div>
            <button><a href="/watch" rel="noreferrer"><p className="font-semibold">Lambda (Anonymous Function)</p>

  </a></button>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <i className="fab fa-linux text-green-500"></i>
          </div>
          <div>
            <p className="font-semibold">AEC2 (Anonymous Compute)</p>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <i className=" fas fa-broadcast-tower text-yellow-500"></i>
          </div>
          <div>
            <p className="font-semibold">AVPC (Anonymous Networking)</p>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <i className="  fas fa-coins text-orange-500"></i>
          </div>
          <div>
            <p className="font-semibold">S3 (Anonymous Storage)</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreatePostBox;
