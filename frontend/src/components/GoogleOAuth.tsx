import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Библиотека для декодирования JWT

// Ваш Client ID из Google Cloud Console
const clientId = '197069996392-1q4b642raa9sck17jjkbc5t1fmtqequm.apps.googleusercontent.com'; // Замените на реальный Client ID

const GoogleAuth: React.FC = () => {
  // Функция обработки успешной авторизации
  const handleSuccess = (credentialResponse: any) => {
    try {
      // Декодируем JWT токен, чтобы получить данные пользователя
      const decoded: any = jwtDecode(credentialResponse.credential);
      console.log('Успешная авторизация:', decoded);

      // Пример данных, которые можно извлечь из decoded:
      const userData = {
        id: decoded.sub, // ID пользователя
        email: decoded.email, // Email пользователя
        name: decoded.name, // Имя пользователя
        picture: decoded.picture, // URL аватара
      };

      // Здесь можно сохранить userData в состоянии или локальном хранилище
      console.log('Данные пользователя:', userData);
    } catch (error) {
      console.error('Ошибка при обработке токена:', error);
    }
  };

  // Функция обработки ошибки
  const handleError = () => {
    console.log('Ошибка при авторизации через Google');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Вход через Google</h2>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap={false} // Отключаем One Tap для теста
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;