import { useOpenAccount } from "@/features/accounts/hooks/useOpenAccount";

type Props = {
  account: string;
  accountId: string;
};

export const AccountColumn = ({ account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(accountId);
  };

  return (
    <div
      onClick={onClick}
      className="flex text-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
};
