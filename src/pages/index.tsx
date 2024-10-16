import { Banner } from '@/common/components/Banner';
import { Header } from '@/common/components/Header';
import { Store } from '@/common/components/Store';
import {Footer} from "@/common/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={'container max-w-[1120px] px-3 mx-auto pt-10 pb-6'}>
        <Banner />
        <Store />
      </div>
      <Footer/>
    </>
  );
}
