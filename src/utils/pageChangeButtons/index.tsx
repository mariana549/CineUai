import { nextPage, prevPage } from "../../functions/funcoes";
import { usePage } from "../../hooks/usePage";
import { useData } from "../../hooks/useData";

import { ImgButton, SpanButton, ToogleButton } from "./pageChangeButtonStled";
import { Box } from "../../globalStyled";

import leftArrow from '../../assets/icons/leftArrow.png';
import rightArrow from '../../assets/icons/rigthArrow.png';

export function PageChangeButton() {
    const { numPageAtual, setNumPageAtual } = usePage()
    const { numPagesTotal } = useData()

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