import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #000000; */
  background-color: #f8f9fa;
  color: #333;
  min-height: 100vh;
  /* padding: 20px; */
`;

export const Header = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #0ca5c0;
  color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Logo = styled.h1`
  position: absolute;
  top: 230;
  font-size: 3.9rem;
  color: #d2ffff;
`;

export const Pheader = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #d1ecf1;
`;

export const Main = styled.main`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1800px;
  margin: 20px 0;
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #0ca5c0;
  border-bottom: 2px solid #0ca5c0;
  padding-bottom: 5px;
`;

export const VerificationMessage = styled.p`
  color: #0ca5c0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 10px;
`;

export const SpanErrorInput = styled.span`
  color: #ac1f1f;
  margin-top: 10px;
  display: block;
`;

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

