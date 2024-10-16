import Image from 'next/image';
import React from 'react';

export const Header: React.FunctionComponent = () => {
  return (
    <header
      className={
        'z-10 w-full flex items-center justify-between lg:justify-center bg-white border-b border-gray-200 p-[5px] lg:p-[10px] lg:px-[50px] h-auto lg:h-[64px]'
      }
    >
      <div className={'container max-w-[1120px] px-3 mx-auto'}>
        <Image
          className={'cursor-pointer !w-auto !h-auto lg:!h-[40px] lg:!w-[140px]'}
          src={require('@/common/assets/images/logo.svg')}
          alt={'Trang chủ'}
        />
      </div>
    </header>
  );
};
