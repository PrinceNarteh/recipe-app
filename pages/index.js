import axios from "axios";
import Card from "../components/Card";

// export default async function getServerSideProps() {
//   const res = await axios.get()
// }

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto pt-20 flex justify-center flex-wrap gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
