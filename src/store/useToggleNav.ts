import {create} from 'zustand';

type ToggleNav = {
  navOpen: boolean;
  setNavOpen: () => void;
}


export const useToggleNav = create<ToggleNav>((set) => ({
  navOpen: false,
  setNavOpen: () => set((state) => ({navOpen: !state.navOpen})),
}));