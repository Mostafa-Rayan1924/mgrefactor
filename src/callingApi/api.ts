export async function getAllProjects() {
  try {
    const res = await fetch(`${process.env.BASE_URL}project/`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return null;
  }
}
