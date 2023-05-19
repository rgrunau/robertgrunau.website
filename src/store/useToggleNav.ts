import {create} from 'zustand';

type ToggleNav = {
  navOpen: boolean;
  toggleNav: () => void;
}


export const useToggleNav = create<ToggleNav>((set) => ({
  navOpen: false,
  toggleNav: () => set((state) => ({navOpen: !state.navOpen})),
}));