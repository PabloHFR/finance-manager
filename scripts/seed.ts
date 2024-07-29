import { accounts, categories, transactions } from "@/db/schema";
import { convertAmountToMiliunits } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";
import { eachDayOfInterval, format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const authUser = auth();

const SEED_USER_ID = authUser.userId!;
const SEED_CATEGORIES = [
  { id: "category_1", name: "Comida", userId: SEED_USER_ID, plaidId: null },
  { id: "category_2", name: "Aluguel", userId: SEED_USER_ID, plaidId: null },
  { id: "category_3", name: "Utilidades", userId: SEED_USER_ID, plaidId: null },
  { id: "category_4", name: "Roupas", userId: SEED_USER_ID, plaidId: null },
  { id: "category_5", name: "Mercado", userId: SEED_USER_ID, plaidId: null },
];

const SEED_ACCOUNTS = [
  { id: "account_1", name: "Corrente", userId: SEED_USER_ID, plaidId: null },
  { id: "account_2", name: "Economias", userId: SEED_USER_ID, plaidId: null },
];

const defaultTo = new Date();
const defaultFrom = subDays(defaultTo, 90);

const SEED_TRANSACTIONS: (typeof transactions.$inferSelect)[] = [];

const generateRandomAmount = (category: typeof categories.$inferSelect) => {
  switch (category.name) {
    case "Aluguel":
      return Math.random() * 400 + 90;
    case "Utilidades":
      return Math.random() * 200 + 50;
    case "Comida":
      return Math.random() * 30 + 10;
    case "Roupas":
      return Math.random() * 50 + 15;
    default:
      return Math.random() * 50 + 10;
  }
};

const generateTransactionsForDay = (day: Date) => {
  const numTransactions = Math.floor(Math.random() * 4) + 1; // 1 to 4 transactions per day
  for (let i = 0; i < numTransactions; i++) {
    const category =
      SEED_CATEGORIES[Math.floor(Math.random() * SEED_CATEGORIES.length)];
    const isExpense = Math.random() > 0.6; // 60% chance of being an expense
    const amount = generateRandomAmount(category);
    const formattedAmount = convertAmountToMiliunits(
      isExpense ? -amount : amount
    ); // Negative for expenses

    SEED_TRANSACTIONS.push({
      id: `transaction_${format(day, "yyyy-MM-dd", {
        locale: ptBR,
      })}_${i}_${Math.random().toString(36).substring(7)}`,
      accountId: SEED_ACCOUNTS[0].id,
      categoryId: category.id,
      date: day,
      amount: formattedAmount,
      payee: "Mercado",
      notes: "Nota aleatória",
    });
  }
};

const generateTransactions = () => {
  const days = eachDayOfInterval({ start: defaultFrom, end: defaultTo });
  days.forEach((day) => generateTransactionsForDay(day));
};

generateTransactions();

export const runSeedScript = async () => {
  try {
    // Reset database
    await db.delete(transactions).execute();
    await db.delete(accounts).execute();
    await db.delete(categories).execute();

    // Seed categories
    await db.insert(categories).values(SEED_CATEGORIES).execute();

    // Seed accounts
    await db.insert(accounts).values(SEED_ACCOUNTS).execute();

    // Seed transactions
    await db.insert(transactions).values(SEED_TRANSACTIONS).execute();
  } catch (error) {
    console.log("Erro ao semear: ", error);
  }
};

runSeedScript();
