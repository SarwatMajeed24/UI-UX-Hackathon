import HomePage from "./components/HomePage";
import NewArrivals from "./components/NewArrivals";
import TopSellings from "./components/TopSellings";
import DressStyle from "./components/DressStyle";
import ReviewPage from "./components/Review";


export default function Home() {
  return (
   <div>
    <HomePage />
    <NewArrivals />
    <TopSellings />
    <DressStyle />
    <ReviewPage />
   </div>
  );
}
