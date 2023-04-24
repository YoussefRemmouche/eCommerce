import PagesFooter from "../../components/Footer/footer.js";
import { MainProd } from "./mainprod/mainprod.js";
import { MoreProds } from "./moreprods/moreprods.js";
import { TopPicks } from "./toppicks/toppicks.js";
import { NewArrivals } from "./newarrivals/newarrivals.js";
import { OurBlogs } from "./ourblogs/ourblogs.js";
import { OurInsta } from "./ourInsta/ourInsta.js";
function Home() {
  return (
    <>
      <MainProd></MainProd>
      <MoreProds></MoreProds>
      <TopPicks></TopPicks>
      <NewArrivals></NewArrivals>
      <OurBlogs></OurBlogs>
      <OurInsta></OurInsta>
      <PagesFooter></PagesFooter>;
    </>
  );
}
export default Home;
