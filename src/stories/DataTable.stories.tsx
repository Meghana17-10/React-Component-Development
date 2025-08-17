import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";

type Row = { id: number; name: string; age: number; role: string };

const rows: Row[] = [
  { id: 1, name: "Aarav", age: 21, role: "Intern" },
  { id: 2, name: "Bhavya", age: 24, role: "Developer" },
  { id: 3, name: "Chirag", age: 22, role: "Designer" },
  { id: 4, name: "Diya", age: 26, role: "Manager" },
];

const columns: Column<Row>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "role", title: "Role", dataIndex: "role", sortable: true },
];

const meta: Meta<typeof DataTable<Row>> = {
  title: "Data Display/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {
  args: { data: rows, columns },
};

export const Selectable: Story = {
  args: { data: rows, columns, selectable: true },
};

export const Loading: Story = {
  args: { data: rows, columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns },
};
