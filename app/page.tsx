import About from "@/components/about";
import { BasicBookNowSectionComponent } from "@/components/basic-book-now-section";
import Explore from "@/components/explore";
import Header from "@/components/header";
import Review from "@/components/review";
import { ServicesSectionComponent } from "@/components/services-section";
import { ServicesSectionWithNestedModal } from "@/components/services-section-with-nested-modal";

export default function Home() {


  return (
    <div>
  <Header/>
  <ServicesSectionComponent/>
  {/* <ServicesSectionWithNestedModal/> */}
  <About/>
  <Review/>
  <BasicBookNowSectionComponent />
 <Explore/>
    </div>
  );
}
