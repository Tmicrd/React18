interface Props {
  itemsCount: number;
}

const NavBar = ({ itemsCount }: Props) => {
  return <div>Total items: {itemsCount}</div>;
};

export default NavBar;
