
import { create } from 'zustand'

export type TenantType = 'KUNDER' | 'FÖRETAG' | 'ÅTERFÖRSÄLJARE' | 'DEVTEAM'

export interface User {
  id: string
  name: string
  email: string
  tenant: TenantType
  role: string
  avatar: string
}

interface StoreState {
  currentView: 'services' | 'dashboard'
  setCurrentView: (view: 'services' | 'dashboard') => void
  
  // Keep existing SKELETTET state for backward compatibility
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  currentTenant: TenantType
  setCurrentTenant: (tenant: TenantType) => void
  switchTenant: (tenant: TenantType) => void
  selectedDemo: string | null
  setSelectedDemo: (demo: string | null) => void
  
  // Auth state
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useStore = create<StoreState>((set) => ({
  currentView: 'services',
  setCurrentView: (view) => set({ currentView: view }),
  
  // Keep existing SKELETTET state
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  currentTenant: 'FÖRETAG',
  setCurrentTenant: (tenant) => set({ currentTenant: tenant }),
  switchTenant: (tenant) => set({ currentTenant: tenant }),
  selectedDemo: null,
  setSelectedDemo: (demo) => set({ selectedDemo: demo }),
  
  // Auth state
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true, currentTenant: user.tenant }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))
