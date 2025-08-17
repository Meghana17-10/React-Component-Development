import React, { useMemo, useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
}

type WithId = { id: string | number };

export function DataTable<T extends WithId>({
  data,
  columns,
  loading = false,
  selectable = false,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<T["id"]>>(new Set());
  const [sort, setSort] = useState<{ key?: keyof T; order: "asc" | "desc" | "none" }>({
    key: undefined,
    order: "none",
  });

  const toggleRow = (row: T) => {
    const next = new Set(selected);
    if (next.has(row.id)) next.delete(row.id);
    else next.add(row.id);
    setSelected(next);
  };

  const sorted = useMemo(() => {
    if (!sort.key || sort.order === "none") return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[sort.key!];
      const bv = b[sort.key!];
      return sort.order === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return copy;
  }, [data, sort]);

  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No data found</div>;

  return (
    <table border={1} cellPadding={6} style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {selectable && <th>Select</th>}
          {columns.map((c) => (
            <th key={c.key}>
              {c.title}
              {c.sortable && (
                <button onClick={() =>
                  setSort((prev) => {
                    if (prev.key !== c.dataIndex) return { key: c.dataIndex, order: "asc" };
                    if (prev.order === "asc") return { key: c.dataIndex, order: "desc" };
                    return { key: undefined, order: "none" };
                  })
                }>
                  ↕
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row) => (
          <tr key={String(row.id)}>
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selected.has(row.id)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map((c) => (
              <td key={c.key}>{String(row[c.dataIndex])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
