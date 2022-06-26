import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground } from 'react-native';
import { Column } from '@Components/Layout';
import { Heading } from '@Components/Typography';
import styles from './styles';

const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require('../../assets/images/login_background.png')}
      style={styles.wrapper}>
      <Column alignItems="center" style={styles.content}>
        <Heading
          color="primary"
          textAlingment="center"
          gradient={10}
          size="large"
          bold>
          {t('login.message')}
        </Heading>
      </Column>
    </ImageBackground>
  );
};

export default Login;
