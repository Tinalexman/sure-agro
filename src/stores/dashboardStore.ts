import { create } from "zustand";

export type tDashboardNavigationData = {
  page: number;
  searchFilter: string;
  setPage: (p: number) => void;
};

export const useDashboardData = create<tDashboardNavigationData>((set) => ({
  page: 0,
  searchFilter: "",
  setPage: (p: number) => {
    set({ page: p });
  },
}));
