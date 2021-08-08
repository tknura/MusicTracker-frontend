export const pl = {
  translation: {
    common: {
      appName: 'Music Tracker',
      username: 'Nazwa użytkownika',
      email: 'E-mail',
      password: 'Hasło',
      repeatPassword: 'Powtórz hasło',
      loginSpotify: 'Zaloguj się do Spotify',
      connectedSpotify: 'Połączono z spotify',
      back: 'Wróć',
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
        repeatPassword: {
          notMatch: 'Podane hasło nie jest zgodne',
          required: 'Powtórzenie hasła jest wymagane',
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
        success: 'Zarejestrowano pomyślnie',
        haveAccount: 'Masz już konto? Zaloguj się',
        errors: {
          generic: 'Wystąpił nieznany błąd podczas rejestracji'
        },
      },
      main: {
        recentTracks: 'Ostatnie utwory',
        ago: 'temu',
        showMore: 'Pokaż więcej',
        showLess: 'Pokaż mniej',
        empty: 'Wygląda na to że nic tu nie ma',
        topArtists: 'Najpopularniejsi wykonawcy',
        topTracks: 'Najpopularniejsze utwory',
        topGenres: 'Najpopularniejsze gatunki',
        chooseTime: 'Wybierz przedział czasowy',
        allTime: 'Cały czas',
        sixMonths: '6 miesięcy',
        fourWeeks: '4 tygodnie',
        playingNow: 'grany teraz'
      },
    },
  }
}
