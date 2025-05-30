export default function Posts() {
  return (
    <>
      <div className="relative jumbotron bg-blue-500 text-white h-30">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPr4VpQ4ltq2ola4uVcdv2x7zj7UPXK98sxRIsqH6DwS_KRV_kM6wtm6qr3eI1lw5Rcs&usqp=CAU"
          alt="Logo"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">Posts</span>
      </div>
      <div className="my-5 container mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <section className="flex flex-wrap gap-4 w-full">
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>{" "}
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow">
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">Card title</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #10</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200">
              <button className="btn btn-primary">post by: Thomas</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
