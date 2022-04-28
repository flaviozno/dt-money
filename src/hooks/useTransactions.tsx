import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

//ReactNode é para os childrens usar qq props do react

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProvidersProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
    transactions: Transaction[];
    createTransactions: (transactions: TransactionInput) => Promise<void>; //tem q ter o promisse pq o createTransaction eh async para ter o await no closeModal
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProvidersProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransactions(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()//nao precisa colocar o id pq o mirage eh auto increment
        })
        const { transaction } = response.data

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext);

    return context
}