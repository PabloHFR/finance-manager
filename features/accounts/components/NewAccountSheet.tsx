import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/useNewAccount";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Nova Conta</SheetTitle>
          <SheetDescription>
            Crie uma nova conta para acompanhar suas transações
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
