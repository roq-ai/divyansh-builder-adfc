const mapping: Record<string, string> = {
  clients: 'client',
  companies: 'company',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
