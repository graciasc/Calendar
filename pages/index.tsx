const Home = () => {
  return (
    <div class="bg-white h-screen">
      <div class="text-white h-1/2 p-12 bg-gray-400">
        <div class="flex">
          <div class="flex-1 flex justify-between">
            <h1 class="text-2xl font-light cursor-pointer">Calendar</h1>
          </div>
          <div>
            <div class="flex text-lg">
              <h1 class="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                About
              </h1>
              <h1 class="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                Contact
              </h1>
              <i class="fa fa-instagram mx-3 mt-1"></i>
              <i class="fa fa-youtube mx-3 mt-1"></i>
              <i class="fa fa-facebook mx-3 mt-1"></i>
              <h1 class="bg-white text-purple-300 px-2 py-1 -mt-1 mx-3 text-lg cursor-pointer">
                Feedback
              </h1>
            </div>
          </div>
        </div>
        <div class="p-24 flex justify-center">
          <h1 class="text-3xl font-serif">
            This is a project idea from the{" "}
            <span class="border-white hover:text-purple-100 text-purple-200">
              <a href="https://github.com/florinpop17/app-ideas" /> app-ideas
            </span>{" "}
            repo{" "}
            <span class="border-b-2 border-white hover:text-gray-200">
              <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md">
                github
              </a>
            </span>.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
