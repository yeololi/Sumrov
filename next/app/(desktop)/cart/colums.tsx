"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type cart = {
  id: string;
  name: string;
  price: number;
  amount: number;
  option: { color: string; size: string };
  image: string;
};

export const columns: ColumnDef<cart>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "image",
    header: () => <div className="text-center font-noto">이미지</div>,
    cell: () => {
      return (
        <div className="w-[150px] flex justify-center">
          <img
            className="w-20 h-[95px] border border-black"
            src="https://via.placeholder.com/80x95"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-center font-noto">상품정보</div>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <div className="w-[400px] flex justify-center">{name}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
