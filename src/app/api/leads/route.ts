export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "João Silva",
      email: "joao@email.com",
      source: "Google Ads",
    },
    {
      id: 2,
      name: "Maria Souza",
      email: "maria@email.com",
      source: "Instagram",
    },
    {
      id: 3,
      name: "Carlos Lima",
      email: "carlos@email.com",
      source: "LinkedIn",
    },
    { id: 4, name: "Ana Costa", email: "ana@email.com", source: "Facebook" },
  ]);
}
