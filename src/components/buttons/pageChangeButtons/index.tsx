import { nextPage, prevPage } from "../../../functions/api/pagination";
import { useData } from "../../../hooks/useData";
import { usePage } from "../../../hooks/usePage";

import { Box } from "../../../globalStyled";
import { ImgButton, SpanButton, ToogleButton } from "./pageChangeButtonStled";

import leftArrow from "../../../assets/icons/leftArrow.png";
import rightArrow from "../../../assets/icons/rigthArrow.png";

export function PageChangeButton() {
  const { numPageAtual, setNumPageAtual } = usePage() || { numPageAtual: 1};
  const { numPagesTotal } = useData() || { numPagesTotal: 1};

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

      <SpanButton>
        {numPageAtual} of {numPagesTotal}
      </SpanButton>

      {numPageAtual < numPagesTotal && (
        <ToogleButton
          type="button"
          onClick={() => nextPage(numPageAtual, numPagesTotal, setNumPageAtual)}
        >
          <ImgButton src={rightArrow} alt="rightArrow" />
        </ToogleButton>
      )}
    </Box>
  );
}
