export const en = {
  translation: {
    common: {
      appName: 'Music Tracker',
      username: 'Username',
      email: 'E-mail',
      password: 'Password',
      repeatPassword: 'Repeat password',
      loginSpotify: 'Log in into Spotify',
      connectedSpotify: 'Connected with spotify',
      back: 'Go back',
      loginFacebook: 'Continue with Facebook',
      friends: 'Friends',
      errors: {
        username: {
          required: 'Username is required',
        },
        email: {
          required: 'E-mail address is required.',
          format: 'E-mail address is in incorrect format.',
        },
        password: {
          required: 'Password is required.',
          toShort: 'Password should be minimum 8 characters long.',
        },
        repeatPassword: {
          notMatch: 'Passwords doesn\'t match.',
          required: 'Repeat password is required.',
        },
      },
    },
    screens: {
      login: {
        mainButton: 'Log in',
        resetPassword: 'Reset password',
        noAccount: 'Don\'t have an account? Register',
        errors: {
          generic: 'Incorrect username/password.',
          username: {
            required: 'Username is required.',
          },
        },
      },
      register: {
        mainButton: 'Register',
        success: 'User registered successfully.',
        haveAccount: 'Already have an account? Log in',
        errors: {
          generic: 'An undefined error occurred during registration, try again later.'
        },
      },
      socialRegister: {
        helper: 'To use the system, please enter your account information below. You will be able to use them to log into the system or any other login method of your choice.',
      },
      main: {
        recentTracks: 'Recent tracks',
        ago: 'ago',
        showMore: 'Show more',
        showLess: 'Show less',
        empty: 'Nothing to show',
        topArtists: 'Top artists',
        topTracks: 'Top tracks',
        topGenres: 'Top genres',
        chooseTime: 'Choose time range',
        allTime: 'All time',
        sixMonths: '6 months',
        fourWeeks: '4 weeks',
        playingNow: 'playing now'
      },
      friends: {
        addFriend: 'Send an invite',
        friendUsername: 'Friend\'s username',
        pending: 'Pending invite',
        pendingList: 'Invitations',
        list: 'Friends list',
      },
    },
  },
}
