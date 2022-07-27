const Calendar = (props) => {
  const handleDays = () => {
  };
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleCalendarLayout = () => {
    const rows = Math.ceil(props.month / 7);
    let startDay = 1;
    return (
      <div>
        {[...Array(rows)].map((e, i) => {
          return (
            <div className={`grid grid-rows-${rows}  gap-4`}>
              <div className="grid grid-cols-7 gap-4">
                {daysOfWeek.map((day) => {
                  return (
                    <div>
                      <h1>
                        {day} {startDay > 30 ? startDay = 1 : startDay++}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {handleCalendarLayout()}
    </div>
  );
};

export default Calendar;
