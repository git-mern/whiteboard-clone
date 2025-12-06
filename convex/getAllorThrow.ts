export async function getAllOrThrow(db: any, ids: string[]) {
  const docs = await Promise.all(ids.map((id) => db.get(id)));

  if (docs.some((doc) => doc === null)) {
    throw new Error("Document not found");
  }

  return docs;
}
