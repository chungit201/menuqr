import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={'container max-w-[1120px] px-3 mx-auto '}>
      <footer className={'w-full flex flex-col pt-[30px] border-t border-[#00000025]'}>
        <div className={'pb-[25px]'}>
          <Link href={'/'} aria-label="Trang chủ">
            <Image
              className={'cursor-pointer !w-auto !h-auto lg:!h-[40px] lg:!w-[140px]'}
              src={require('@/common/assets/images/logo.svg')}
              alt={''}
            />
          </Link>
        </div>
        <div className={'middle_footer border-b border-[#00000015]'}>
          <div className={'pb-[20px] lg:pb-[40px] flex justify-between gap-4 flex-col lg:flex-row'}>
            <div className={''}>
              <ul>
                <li className={'flex gap-[15px] mb-[20px] text-[18px] font-normal'}><h5>Công ty cổ phần Rapida
                  Technologies</h5></li>
                <li className={'flex gap-[15px] mb-[20px] text-[18px] font-normal'}>
                  <Image src={require("@/common/assets/images/faststore-location-icon.3d159411.svg")} alt={''}/>
                  <div>Số HA02-231, Đường Hải Âu 2, Khu Đô thị Vinhomes Ocean Park, Xã Kiêu Kỵ, Huyện Gia Lâm, Thành phố
                    Hà Nội
                  </div>
                </li>
                <li className={'flex gap-[15px] mb-[20px] text-[18px] font-normal'}>
                  <Image src={require("@/common/assets/images/faststore-phone-icon.ef83e201.svg")} alt={''}/>
                  <Link className={'hover:text-[#69b1ff] font-semibold transition'}
                        href="tel:0354851198">035.485.1198</Link>
                </li>
                <li className={'flex gap-[15px] mb-[20px] text-[18px] font-normal'}>
                  <Image src={require("@/common/assets/images/faststore-email-icon.f26712ab.svg")} alt={''}/>
                  <Link className={'hover:text-[#69b1ff]  italic transition'}
                        href="mailto:support@menuqr.vn">support@menuqr.vn</Link>
                </li>
              </ul>
            </div>
            <div className={'flex flex-row lg:flex-col items-center justify-center gap-3'}>
              <Link target={'_blank'} title={'App Store'} href={'https://apps.apple.com/vn/app/menuqr/id6473097554?l='}>
                <Image src={require("@/common/assets/images/btn-apple-store.e94a93f1.svg")} alt={'App Store'}/>
              </Link>
              <Link target={'_blank'} title={'Google Play'}
                    href="https://play.google.com/store/apps/details?id=com.faststorevn.vn&pcampaignid=web_share">
                <Image src={require("@/common/assets/images/btn-google-play.ad87427f.svg")} alt={'Google Play'}/>
              </Link>
            </div>
          </div>
        </div>

        <div className={'bottom_ft_ct py-[25px] items-center gap-[20px] justify-between font-normal'}>
          <div>© 2024 Faststore by Rapida Technologies - All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};
