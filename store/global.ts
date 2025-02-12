import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    detailsOpened: false,
    sidebarOpened: true,
  }),
})
