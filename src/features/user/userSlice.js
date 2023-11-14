import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.fantasy
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

const initialState = {
  user: { username: 'coding' },
  theme: getThemeFromLocalStorage(),
}

const themes = {
  fantasy: 'fantasy',
  dracula: 'dracula',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login')
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    toggleTheme: (state) => {
      const { dracula, fantasy } = themes
      state.theme = state.theme === dracula ? fantasy : dracula
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer