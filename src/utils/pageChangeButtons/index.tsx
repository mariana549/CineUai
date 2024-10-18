import { nextPage, prevPage } from "../../functions/funcoes";

import leftArrow from '../../../public/icons/leftArrow.png';
import rightArrow from '../../../public/icons/rigthArrow.png';
import { PageChangeButtonProps } from "../interfaces";

export function PageChangeButton({
    numPageAtual,
    setNumPageAtual,
    numPagesTotal
}: PageChangeButtonProps) {
    
    return (
        <div className='mudarPaginaBloco'>
            {numPageAtual > 1 && (
                <button
                    type="button"
                    onClick={() => prevPage(numPageAtual, setNumPageAtual)}
                >
                    <img src={leftArrow} alt="leftArrow" style={{ width: "20px" }} />
                </button>
            )}

            <span>Page {numPageAtual} de {numPagesTotal}</span>

            {numPageAtual < numPagesTotal && (
                <button
                    type="button"
                    onClick={() => nextPage(numPageAtual, numPagesTotal, setNumPageAtual)}
                >
                    <img src={rightArrow} alt="rightArrow" style={{ width: "20px" }} />
                </button>
            )}
        </div>
    )
}