export const pl = {
  translation: {
    common: {
      appName: 'Music Tracker',
      username: 'Nazwa użytkownika',
      email: 'E-mail',
      password: 'Hasło',
      loginSpotify: 'Zaloguj się do Spotify',
      errors: {
        username: {
          required: 'Nazwa użytkownika jest wymagana',
        },
        email: {
          required: 'Adres e-mail jest wymagany',
          format: 'Adres e-mail jest niepoprawny.',
        },
        password: {
          required: 'Hasło jest wymagane',
          toShort: 'Hasło powinno mieć conajmniej 8 znaków',
        },
      },
    },
    screens: {
      login: {
        mainButton: 'Zaloguj się',
        resetPassword: 'Zresetuj hasło',
        noAccount: 'Nie masz konta? Zarejestruj się',
        errors: {
          generic: 'Niepoprawne dane logowania.',
          username: {
            required: 'Nazwa użytkownika jest wymagana',
          },
        },
      },
      register: {
        mainButton: 'Zarejestruj się',
        repeatPassword: 'Powtórz hasło',
        success: 'Zarejestrowano pomyślnie',
        haveAccount: 'Masz już konto? Zaloguj się',
        errors: {
          repeatPassword: {
            notMatch: 'Podane hasło nie jest zgodne',
            required: 'Powtórzenie hasła jest wymagane',
          },
          generic: 'Wystąpił nieznany błąd podczas rejestracji'
        },
      },
      main: {
        recentTracks: 'Ostatnie utwory',
        ago: 'temu',
        showMore: 'Pokaż więcej',
        showLess: 'Pokaż mniej',
      }
    },
  }
}
