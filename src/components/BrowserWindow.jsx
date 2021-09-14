import React, { useState } from "react";
import styled from "styled-components";
import ImageCarosuel from "./ImageCarosuel";

const Container = styled.div`
  border: 4px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  margin: 0px;
  padding: 0px;
  width: 515px;

  @media (max-width: 1200px) {
    width: 380px;
  }
`;

const Row = styled.div`
  padding: 5px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.text};
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  min-height: 18px;
`;

const Column = styled.div`
  float: left;
`;

const Dot = styled.span`
  margin-top: 4px;
  margin-right: 2px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const SearchBar = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 10px;
  color: #666;
  padding: 5px;
`;

const Content = styled.div`
  padding: 0px;
  margin: 0px;
  cursor: pointer;
`;

const Image = styled.img`
  height: 280px;
  width: 509px;
  object-fit: cover;
  margin: 3px;
  margin-bottom: 0px;

  @media (max-width: 1200px) {
    height: 200px;
    width: 374px;
  }
`;

export default function BrowserWindow({ link, image }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Container>
      <Row>
        <Column style={{ width: "15%" }}>
          <Dot style={{ background: "#ED594A" }}></Dot>
          <Dot style={{ background: "#FDD800" }}></Dot>
          <Dot style={{ background: "#5AC05A" }}></Dot>
        </Column>
        <Column style={{ width: "75%" }}>
          <SearchBar type="text" value={link} readonly />
        </Column>
      </Row>
      <Content onClick={handleClickOpen}>
        <Image src={image} alt="text" />
      </Content>
      <ImageCarosuel open={open} onClose={handleClose} />
    </Container>
  );
}
