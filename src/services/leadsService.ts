export async function getLeads() {
  const res = await fetch("/api/leads");

  if (!res.ok) {
    throw new Error("Failed to fetch leads");
  }

  return res.json();
}
