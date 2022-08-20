import Header from "../components/header";
const calendarPage = () => {
  return (
    <div className="h-screen ">
      <div className="h-1/4">
        <Header showFeedback={false} darkModeIconColor={"text-black"} />
        <div className="flex justify-center">
          <h1>Month Component</h1>
        </div>
      </div>
      <div className="flex justify-center text-white bg-black h-3/4">
        <h1>Detail Component</h1>
      </div>
    </div>
  );
};

export default calendarPage;
