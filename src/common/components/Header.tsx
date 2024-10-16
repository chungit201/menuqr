import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const Header: React.FunctionComponent = () => {
  const [showLocale, setShowLocale] = React.useState(false);
  const { i18n } = useTranslation();
  const router = useRouter();
  const { t } = useTranslation('common');

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header
      className={
        'z-10 w-full flex items-center justify-between lg:justify-center bg-white border-b border-gray-200 p-[5px] lg:p-[10px] lg:px-[50px] h-auto lg:h-[64px]'
      }
    >
      <div className={'container max-w-[1120px] px-3 mx-auto'}>
        <div className={'flex justify-between items-center '}>
          <Image
            aria-label="Trang chủ"
            className={'cursor-pointer !w-auto !h-auto lg:!h-[40px] lg:!w-[140px]'}
            src={require('@/common/assets/images/logo.svg')}
            alt={'Trang chủ'}
          />
          <div
            onClick={() => setShowLocale(!showLocale)}
            className={'dropdown-toggle cursor-pointer flex items-center gap-1 relative'}
          >
            {i18n.language === 'en' && (
              <Image
                className={'w-[25px] h-auto'}
                src={require('@/common/assets/images/Flag_of_the_United_States.svg.png')}
                alt={''}
              />
            )}
            {i18n.language === 'vi' && (
              <Image
                className={'w-[25px] h-auto'}
                src={require('@/common/assets/images/Flag_of_Vietnam.svg.webp')}
                alt={''}
              />
            )}
            {showLocale && (
              <div
                className={
                  'absolute bottom-[-90px] cursor-pointer z-[10] bg-[#fff] rounded min-w-[150px] border border-[#00000026] right-0'
                }
              >
                <div>
                  <div
                    onClick={() => onToggleLanguageClick('en')}
                    className={'p-[10px] hover:bg-[#f5f5f5] cursor-pointer flex items-center gap-2'}
                  >
                    <Image
                      className={'w-[25px] h-auto'}
                      src={require('@/common/assets/images/Flag_of_the_United_States.svg.png')}
                      alt={''}
                    />
                    <span className={'text-[14px]'}>{t('english')}</span>
                  </div>
                  <div
                    onClick={() => onToggleLanguageClick('vi')}
                    className={'p-[10px] hover:bg-[#f5f5f5] cursor-pointer flex items-center gap-2'}
                  >
                    <Image
                      className={'w-[25px] h-auto'}
                      src={require('@/common/assets/images/Flag_of_Vietnam.svg.webp')}
                      alt={''}
                    />
                    <span className={'text-[14px]'}>{t('vietnamese')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
