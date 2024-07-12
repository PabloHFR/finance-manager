"use client";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { Plus } from "lucide-react";
import { columns, Payment } from "./_components/Columns";

export default function AccountsPage() {
  const newAccount = useNewAccount();

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728e2d52f",
      amount: 120,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 150,
      status: "pending",
      email: "m22@example.com",
    },
    // ...
  ];

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Contas</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Adicionar
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
