import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InputField } from "../components/InputField";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";

const Demo = () => {
  const [username, setUsername] = useState("");

  type Row = { id: number; name: string; age: number; role: string };
  const rows: Row[] = [
    { id: 1, name: "Aarav", age: 21, role: "Intern" },
    { id: 2, name: "Bhavya", age: 24, role: "Developer" },
    { id: 3, name: "Chirag", age: 22, role: "Designer" },
    { id: 4, name: "Diya", age: 26, role: "Manager" },
  ];
  const cols: Column<Row>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "role", title: "Role", dataIndex: "role", sortable: true },
  ];

  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">User Form</h2>
        <InputField
          label="Username"
          placeholder="Enter username"
          helperText="Required field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          size="md"
        />
      </div>
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Team Members</h2>
        <DataTable data={rows} columns={cols} selectable />
      </div>
    </div>
  );
};

const metaDemo: Meta<typeof Demo> = {
  title: "Demo/AssignmentPreview",
  component: Demo,
};
export default metaDemo;

type Story = StoryObj<typeof Demo>;

export const Preview: Story = { args: {} };
