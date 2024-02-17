// LogoDisplay.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo, LogoBlack } from '@/public/images';
import { useThemeMenu } from './Theme/ThemeMenuProvider';

const LogoDisplay: React.FC = () => {
  const { theme } = useThemeMenu();

  return (
  <div className="text-3xl font-bold select-none absolute right-[46.5%]">
    <Link href="/">
      {theme === "dark" ? (
        <Image className='object-contain h-[50px]' src={LogoBlack} alt="Logo" width={150} height={150} />
      ) : (
        <Image className='object-contain h-[50px]' src={Logo} alt="Logo" width={150} height={150} />
      )}
    </Link>
  </div>
  )
}

export default LogoDisplay;