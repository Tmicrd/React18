interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All categories</option>
      <option value="Food">Food</option>
      <option value="Home">Home</option>
      <option value="Fuel">Fuel</option>
    </select>
  );
};

export default ExpenseFilter;
