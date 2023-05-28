const StyledSelect = ({ children }) => (
  <select className="text-base text-black-300 border border-gray-300 rounded-md bg-white input_padd">
    {children}
  </select>
);
const MonthSelect = () => {
  return (
    <StyledSelect>
      <option value="01">January</option>
      <option value="02">February</option>
      <option value="03">March</option>
      <option value="04">April</option>
      <option value="05">May</option>
      <option value="06">June</option>
      <option value="07">July</option>
      <option value="08">August</option>
      <option value="09">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </StyledSelect>
  );
};

const DaySelect = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <StyledSelect>
      {days.map((day) => (
        <option key={day} value={day.toString().padStart(2, "0")}>
          {day}
        </option>
      ))}
    </StyledSelect>
  );
};

const YearSelect = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <StyledSelect>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </StyledSelect>
  );
};

const DateSelector = () => {
  return (
    <div className="flex _spacing">
      <MonthSelect />
      <DaySelect />
      <YearSelect />
    </div>
  );
};

export default DateSelector;
