import React from 'react';

interface Props {
  stores: StoreDetail[];
}

export const Store: React.FunctionComponent<Props> = ({ stores }) => {
  const handleView = () => {
    window.open('/store', '_blank');
  };

  console.log('stores', stores);

  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'}>
      {stores.map((store, index) => {
        return (
          <div onClick={handleView} className={'cursor-pointer'} key={index}>
            <div className={'w-full mb-1.5 lg:mb-3'}>
              <img
                className={'object-cover object-center rounded-[12px] !w-full !h-auto max-h-[172px]'}
                src={store.imageStoreUrl as string}
                alt={store.name}
              />
            </div>
            <h3 className={'m-0 text-[16px] font-semibold truncate mb-[5px]'}>{store.name}</h3>
            <p className={'truncate text-[#606060] text-[14px] font-normal'}>
              {store.address}, {store.ward.name}, {store.province.name}, {store.district.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
