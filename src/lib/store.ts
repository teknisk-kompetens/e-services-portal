
import { create } from 'zustand'

export type TenantType = 'KUNDER' | 'FÖRETAG' | 'ÅTERFÖRSÄLJARE' | 'DEVTEAM'

export interface User {
  id: string
  name: string
  email: string
  tenant: TenantType
  avatar?: string
}

export interface AppState {
  // Authentication
  user: User | null
  isAuthenticated: boolean
  
  // Tenant Management
  currentTenant: TenantType
  
  // UI State
  sidebarOpen: boolean
  currentApp: string | null
  
  // Demo Apps State
  selectedDemo: string | null
  
  // Actions
  login: (user: User) => void
  logout: () => void
  switchTenant: (tenant: TenantType) => void
  toggleSidebar: () => void
  setCurrentApp: (appId: string | null) => void
  setSelectedDemo: (demoId: string | null) => void
}

export const useStore = create<AppState>((set, get) => ({
  // Initial State
  user: null,
  isAuthenticated: false,
  currentTenant: 'KUNDER',
  sidebarOpen: true,
  currentApp: null,
  selectedDemo: null,

  // Actions
  login: (user: User) => set({ 
    user, 
    isAuthenticated: true, 
    currentTenant: user.tenant 
  }),

  logout: () => set({ 
    user: null, 
    isAuthenticated: false,
    currentTenant: 'KUNDER',
    currentApp: null,
    selectedDemo: null
  }),

  switchTenant: (tenant: TenantType) => set({ 
    currentTenant: tenant,
    currentApp: null,
    selectedDemo: null
  }),

  toggleSidebar: () => set(state => ({ 
    sidebarOpen: !state.sidebarOpen 
  })),

  setCurrentApp: (appId: string | null) => set({ 
    currentApp: appId,
    selectedDemo: null
  }),

  setSelectedDemo: (demoId: string | null) => set({ 
    selectedDemo: demoId,
    currentApp: demoId
  })
}))
