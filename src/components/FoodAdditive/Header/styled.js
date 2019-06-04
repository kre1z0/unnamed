import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  color: #fff;
  background-color: #000;
  background-image: ${({ background }) => `url(${background})`};
  width: 100%;
  height: calc(100vw * 0.55);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`;

export const RightSide = styled.header`
  width: 40vw;
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
`;

export const Ul = styled.ul`
  margin: 0;
  padding-top: 20px;
`;

export const Li = styled.li`
  font-size: 14px;
  margin-bottom: 0.4em;
`;

export const SchemeItem = styled.div`
  position: absolute;
  left: 15px;
  max-width: 40vw;
  padding-top: 5px;
  &:before {
    display: block;
    position: relative;
    top: -5px;
    left: 0;
    width: 36vw;
    content: "";
    height: 1px;
    background-color: #fff;
  }
`;

export const Allergens = styled(SchemeItem)`
  top: calc(100vw * 0.094);
`;

export const Blood = styled(SchemeItem)`
  top: calc(100vw * 0.164);
  &:before {
    width: 48vw;
  }
`;

export const Asthma = styled(SchemeItem)`
  top: calc(100vw * 0.264);
  &:before {
    width: 48vw;
  }
`;

export const Liver = styled(SchemeItem)`
  top: calc(100vw * 0.364);
  &:before {
    width: 42vw;
  }
`;

export const Digestion = styled(SchemeItem)`
  top: calc(100vw * 0.42);
  &:before {
    width: 48vw;
  }
`;

export const Intestines = styled(SchemeItem)`
  top: calc(100vw * 0.51);
  &:before {
    width: 44vw;
  }
`;

export const E = styled.span`
  display: inline-block;
  color: #000;
  background-color: #fff;
  padding: 0 0.4em;
  border-radius: 2px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

export const SubTitle = styled.h3`
  color: #f98900;
  margin-bottom: 0;
`;

export const RightSideParagraph = styled.p`
  margin: 10px 0;
`;
