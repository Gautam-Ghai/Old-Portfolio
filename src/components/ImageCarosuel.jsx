import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dialog from "@material-ui/core/Dialog";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Image = styled.img`
  height: 380px;
  width: 709px;
  object-fit: cover;

  @media (max-width: 1200px) {
    height: 212px;
    width: 409px;
  }
`;

export default function ImageCarosuel({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="Image Carosuel" open={open}>
      <Carousel autoPlay showThumbs={false}>
        <div>
          <Image src="https://source.unsplash.com/random" alt="" />
        </div>
        <div>
          <Image src="https://source.unsplash.com/random" alt="" />
        </div>
        <div>
          <Image src="https://source.unsplash.com/random" alt="" />
        </div>
      </Carousel>
    </Dialog>
  );
}
