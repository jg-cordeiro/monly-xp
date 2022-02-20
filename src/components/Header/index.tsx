import React from 'react';
import { CustomText } from 'styles/globalComponents';
import { Container, Arrow } from './style';
import { ArrowBack } from '../../assets';
import Image from 'next/image';
import { useRouter } from 'next/router';

type HeaderProps = {
  title: string;
  previousRoute: string;
  children?: React.ReactNode; // description
};
const Header = ({ title, children, previousRoute }: HeaderProps) => {
  const router = useRouter();

  const handleReturn = () => {
    router.push(previousRoute);
  };

  return (
    <Container>
      <Arrow>
        <Image src={ArrowBack} onClick={handleReturn} />
      </Arrow>

      <CustomText bold black size="32px">
        {title}
      </CustomText>

      <CustomText regular grey>
        {children}
      </CustomText>
    </Container>
  );
};

export default Header;
