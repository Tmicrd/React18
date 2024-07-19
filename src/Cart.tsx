interface Props {
  items: string[];
  onClear: () => void;
}

const Cart = ({ items, onClear }: Props) => {
  return (
    <>
      <p>Cart</p>
      <ul>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
