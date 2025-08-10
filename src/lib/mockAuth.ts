
import { TenantType, User } from './store'

export const mockUsers: Record<TenantType, User> = {
  KUNDER: {
    id: '1',
    name: 'Anna Andersson',
    email: 'anna@example.com',
    tenant: 'KUNDER',
    role: 'Customer',
    avatar: '👤'
  },
  FÖRETAG: {
    id: '2', 
    name: 'David Davidsson',
    email: 'david@företag.se',
    tenant: 'FÖRETAG',
    role: 'Business User',
    avatar: '🏢'
  },
  ÅTERFÖRSÄLJARE: {
    id: '3',
    name: 'Maria Mariasson', 
    email: 'maria@partner.com',
    tenant: 'ÅTERFÖRSÄLJARE',
    role: 'Partner',
    avatar: '🤝'
  },
  DEVTEAM: {
    id: '4',
    name: 'Erik Eriksson',
    email: 'erik@devteam.com', 
    tenant: 'DEVTEAM',
    role: 'Developer',
    avatar: '⚙️'
  }
}

export const mockLogin = async (tenant: TenantType): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return mockUsers[tenant]
}

export const mockLogout = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 200))
}

export const getTenantPermissions = (tenant: TenantType) => {
  const permissions = {
    KUNDER: {
      canViewInvoices: true,
      canContactBusiness: true,
      canRequestServices: true,
      canAccessAllApps: false,
      canAccessApps: ['faktura-viewer', 'meddelanden']
    },
    FÖRETAG: {
      canManageCustomers: true,
      canAccessCRM: true,
      canViewAnalytics: true,
      canIntegrateServices: true,
      canAccessAllApps: false,
      canAccessApps: ['faktura-viewer', 'kundregister', 'kalender', 'analytics', 'dokument', 'meddelanden']
    },
    ÅTERFÖRSÄLJARE: {
      canAccessCRM: true,
      canManagePartners: true,
      canViewCommissions: true,
      canAccessMarketplace: true,
      canAccessAllApps: false,
      canAccessApps: ['kundregister', 'kalender', 'analytics', 'meddelanden']
    },
    DEVTEAM: {
      canConfigureSystem: true,
      canManageUsers: true,
      canAccessAllApps: true,
      canViewSystemMetrics: true,
      canAccessApps: ['faktura-viewer', 'kundregister', 'kalender', 'analytics', 'dokument', 'meddelanden']
    }
  }
  
  return permissions[tenant]
}
