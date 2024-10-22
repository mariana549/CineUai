import { nextPage, prevPage } from "../../functions/funcoes";

import leftArrow from '../../../public/icons/leftArrow.png';
import rightArrow from '../../../public/icons/rigthArrow.png';
import { PageChangeButtonProps } from "../interfaces";
import { ImgButton, SpanButton, ToogleButton } from "./pageChangeButtonStled";
import { Box } from "../../globalStyled";

export function PageChangeButton({
    numPageAtual,
    setNumPageAtual,
    numPagesTotal
}: PageChangeButtonProps) {

    return (
        <Box>
            {numPageAtual > 1 && (
                <ToogleButton
                    type="button"
                    onClick={() => prevPage(numPageAtual, setNumPageAtual)}
                >
                    <ImgButton src={leftArrow} alt="leftArrow" />
                </ToogleButton>
            )}

            <SpanButton>{numPageAtual} de {numPagesTotal}</SpanButton>

            {numPageAtual < numPagesTotal && (
                <ToogleButton
                    type="button"
                    onClick={() => nextPage(numPageAtual, numPagesTotal, setNumPageAtual)}
                >
                    <ImgButton src={rightArrow} alt="rightArrow" />
                </ToogleButton>
            )}
        </Box>
    )
}