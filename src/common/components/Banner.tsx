import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Banner: React.FunctionComponent = () => {
  return (
    <div className={'banner relative w-full mb-5 lg:mb-[30px] flex flex-col-reverse items-center lg:block'}>
      <div className={'h-[360px] lg:h-[416px] z-[1] flex relative'}>
        <div
          className={
            'shadow-custom-shadow relative z-[10] w-full lg:w-[416px] px-[20px] py-[30px]  lg:px-[32px] lg:py-[48px] my-auto rounded-[24px] bg-white'
          }
        >
          <h1 className={'font-semibold tracking-normal leading-[40px] text-[28px] lg:text-[32px]'}>
            Dịch vụ giao đồ ăn tại Việt Nam
          </h1>
          <p className={'text-[14px] lg:text-[16px] font-normal text-[#606060] m-0 mt-[16px]'}>
            Đặt hàng trực tuyến để được giao hàng hoặc nhận hàng siêu nhanh, hỗ trợ bởi MenuQR.
          </p>
          <div className={'flex flex-col gap-[16px]'}>
            <button
              className={
                'text-[14px] hover:text-[#4096ff] hover:border-[#4096ff] transition border hover:bg-[#ffffff] mt-6 lg:text-[16px] font-medium bg-blue-600 text-[#fff] w-full rounded-full h-[40px]'
              }
            >
              Đăng nhập để đặt hàng
            </button>
            <div className={'text-center'}>
              <Link className={'text-[14px] lg:text-[16px] font-normal underline mx-auto hover:!bg-white'} href={''}>
                Tìm kiếm gần
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={
          'lg:!w-[785px] lg:!h-[416px] !max-w-full !w-full !h-auto object-cover rounded-[16px] lg:absolute lg:top-0 lg:left-[310px] lg:z-0'
        }
        src={require('@/common/assets/images/BannerMenuQR.webp')}
        alt={''}
      />
    </div>
  );
};
