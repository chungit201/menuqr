import { Banner } from '@/common/components/Banner';
import { Footer } from '@/common/components/Footer';
import { Header } from '@/common/components/Header';
import { Store } from '@/common/components/Store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(props: any) {
  console.log('props', props);
  return (
    <>
      <Header />
      <div className={'container max-w-[1120px] px-3 mx-auto pt-10 pb-6'}>
        <Banner />
        <Store stores={props.stores} />
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const theLocale = locale as string;
  const res = await fetch(
    'https://api.faststore.asia/api/ServiceFacility/rpc/FastStore/serviceFacility/getAllFacilityInfo?PageSize=30',
  );
  const repo: any = await res.json();
  return {
    props: {
      stores: repo?.data.items || null,
      ...(await serverSideTranslations(theLocale == 'default' ? 'vi' : theLocale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
