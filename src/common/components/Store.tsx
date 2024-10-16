import { stores } from '@/common/datas';
import React from 'react';

export const Store: React.FunctionComponent = () => {
  const handleView = () => {
    window.open('/store', '_blank');
  };

  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'}>
      {stores.data.items.map((store, index) => {
        return (
          <div onClick={handleView} className={'cursor-pointer'} key={index}>
            <div className={'w-full mb-1.5 lg:mb-3'}>
              <img
                className={'object-cover object-center rounded-[12px] !w-full !h-auto max-h-[172px]'}
                src={store.imageStoreUrl}
                alt={store.name}
              />
            </div>
            <h3 className={'m-0 text-[16px] font-semibold truncate mb-[5px]'}>{store.name}</h3>
            <p className={'truncate text-[#606060] text-[14px] font-normal'}>
              {store.adress}, {store.ward.name}, {store.province.name}, {store.district.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
