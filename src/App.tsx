import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable, Column } from "./components/DataTable";

export default function App() {
  const [name, setName] = useState("");

  const rows = [
    { id: 1, name: "Aarav", age: 21, role: "Intern" },
    { id: 2, name: "Bhavya", age: 24, role: "Developer" },
    { id: 3, name: "Chirag", age: 22, role: "Designer" },
    { id: 4, name: "Diya", age: 26, role: "Manager" },
  ];

  const cols: Column<(typeof rows)[number]>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "role", title: "Role", dataIndex: "role", sortable: true },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 p-6 md:p-10 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Frontend Assignment Demo</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Component 1: InputField</h2>
          <div className="space-y-6">
            <InputField
              label="Username"
              placeholder="Enter username"
              helperText="Required field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              size="md"
            />
            <InputField
              label="Password"
              placeholder="••••••••"
              type="password"
              value={name}
              onChange={(e) => setName(e.target.value)}
              helperText="At least 8 characters"
              variant="filled"
              size="md"
            />
            <InputField
              label="Invalid"
              placeholder="Wrong value"
              errorMessage="Invalid input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              invalid
              variant="outlined"
              size="md"
            />
            <InputField
              label="Disabled"
              placeholder="Disabled"
              disabled
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="ghost"
              size="lg"
            />
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Component 2: DataTable</h2>
          <DataTable data={rows} columns={cols} selectable />
        </div>
      </div>
    </div>
  );
}