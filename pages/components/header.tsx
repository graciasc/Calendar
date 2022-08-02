interface HeaderProps {
  header: string[];
}
const Header = (props: HeaderProps) => {
  return (
    <div className="flex">
      <div className="flex-1 flex justify-between">
        <h1 className="text-2xl font-light cursor-pointer text-purple-400">
          Calendar
        </h1>
      </div>
      <div>
        <div className="flex text-lg">
          {props.headers.map((header) => {
            return (
              <h1 className="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                {header}
              </h1>
            );
          })}
          <i className="fa fa-instagram mx-3 mt-1"></i>
          <i className="fa fa-youtube mx-3 mt-1"></i>
          <i className="fa fa-facebook mx-3 mt-1"></i>
          <h1 className=" rounded-md bg-white text-gray-900 px-2 py-1 -mt-1 mx-3 text-lg cursor-pointer">
            Feedback
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
