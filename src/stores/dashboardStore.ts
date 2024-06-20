import { create } from "zustand";

export type tDashboardNavigationData = {
  page: number;
  setPage: (p: number) => void;
};

export const useDashboardData = create<tDashboardNavigationData>((set) => ({
  page: 0,
  setPage: (p: number) => {
    set({ page: p });
  },
}));
