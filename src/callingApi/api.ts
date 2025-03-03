export async function getAllProjects(category?: string) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}project/${
        category ? `getProjectCat/${category}` : ""
      }`
    );
    if (!res.ok) {
      throw new Error(`تعثر الحصول علي المشاريع! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch projects:");
    return null;
  }
}
// get one project by id
export async function getProjectById(id: string) {
  try {
    const res = await fetch(`${process.env.BASE_URL}project/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return null;
  }
}
