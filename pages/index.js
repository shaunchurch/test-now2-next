import Link from "next/link";

export default () => (
  <div>
    Hello world!{" "}
    <Link href="/item?id=itema" as="/item/itema">
      <a>Item A</a>
    </Link>
    <Link href="/item?id=itemb" as="/item/itemb">
      <a>Item B</a>
    </Link>
  </div>
);
