export const getNumPagesTotal = (numTotal: number): number => {
    const pagesTotal = Math.ceil(numTotal / 10); // Divide o total de resultados pelo número de resultados por página e arredonda para cima
    if (Number.isNaN(pagesTotal)) return 0;
    return pagesTotal;
}

export const prevPage = (numPageAtual: number, setNumPageAtual: React.Dispatch<React.SetStateAction<number>>) => {
    if (numPageAtual > 1) {
        setNumPageAtual((prev) => prev - 1);
    }
}

export const nextPage = (numPageAtual: number, numPagesTotal: number, setNumPageAtual: React.Dispatch<React.SetStateAction<number>>) => {
    if (numPageAtual < numPagesTotal) {
        setNumPageAtual((prev) => prev + 1);
    }
}