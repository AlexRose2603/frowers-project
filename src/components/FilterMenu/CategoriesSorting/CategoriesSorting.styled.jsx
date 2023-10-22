import styled from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.div`
  padding: 0 10px;
`;

export const FilterInput = styled(Field)`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const FilterItem = styled.label`
  font-family: Oswald;
  font-size: 12px;
  position: relative;
  letter-spacing: 0.48px;
  text-transform: uppercase;

  margin-bottom: 5px;

  cursor: pointer;

  &:hover {
    color: #43ffd2;
  }
`;

export const ContainerCheckbox = styled.div`
  display: inline-flex;

  cursor: pointer;

  input:checked {
    & + label {
      border-radius: 40px;
      border: 0.5px solid #43ffd2;
      background: #43ffd2;
      color: #000000;
    }
  }

  label {
    padding: 11px 16px;

    border-radius: 40px;
    border: 0.5px solid #fff;
  }
`;

export const ListContainer = styled.div`
  /* background: #43ffd33a; */
  height: 100%;
  /* position: relative; */
`;

export const FilterButton = styled.button`
  color: #43ffd2;
  outline: none;
  border: 0;
  background: transparent;
  font-family: Oswald;
  font-size: 16px;

  letter-spacing: 1.6px;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin-bottom: 20px;
  &::after {
    content: "▼";

    color: #43ffd2;
    list-style-type: none;
    text-decoration-line: none;

    margin-left: 10px;
  }
`;

export const List = styled.div`
  z-index: 999;

  overflow: hidden;

  transition: top 1.5s ease, opacity 1.5s ease, transform 1.5s ease,
    max-height 1.5s ease;
`;

export const StyledForm = styled(Form)`
  /* justify-content: center; */

  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  /* display: inline-block; */

  backdrop-filter: blur(10px);
`;
