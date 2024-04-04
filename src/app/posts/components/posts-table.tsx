import { DataTable } from "@/components";
import { getAllPosts } from "./get-posts";

const columns = [
  { field: "id", headerName: "id" },
  { field: "firstName", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  { field: "email", headerName: "Email" },
  { field: "dateOfBirth", headerName: "Date of Birth" },
  { field: "userRole", headerName: "Role" },
];

export default async function PostsTable() {
  const posts = await getAllPosts();
  return <DataTable rows={posts} columns={columns} />;
}
