export default function Loading() {
  return (
    <div className="grid grid-cols-5 mt-5 place-items-center">
      <div className="mx-3 my-3 max-w-sm bg-white border rounded-lg shadow dark:bg-gray-400 h-96 ">
        <a href="#"></a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
          </a>
          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
