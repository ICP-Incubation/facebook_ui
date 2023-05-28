const StyledLabel = ({ children }) => {
  return (
    <label className="border input_padd border-gray-300 rounded-md cursor-pointer">
      {children}
    </label>
  );
};

export default function GenderSelector() {
  return (
    <div className="flex _spacing">
      <StyledLabel>
        <input
          type="radio"
          name="gender"
          value="male"
          className="transition border-blue-500 mr-1"
        />
        Male
      </StyledLabel>
      <StyledLabel>
        <input
          type="radio"
          name="gender"
          value="female"
          className="transition border-blue-500 mr-1"
        />
        Female
      </StyledLabel>
      <StyledLabel>
        <input
          type="radio"
          name="gender"
          value="other"
          className="transition border-blue-500 mr-1"
        />
        Other
      </StyledLabel>
    </div>
  );
}
