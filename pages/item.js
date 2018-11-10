import Link from "next/link";

const Item = props => {
  return (
    <div>
      {props.id}
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

Item.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default Item;
