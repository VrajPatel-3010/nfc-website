import styled from "styled-components";

const ServiceCardLeft = ({ imageUrl, title, subTitle, description }) => {
  return (
    <Wrapper className="row">
      <Info className="col-sm-12 col-md-6">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </Info>
      <div className="col-sm-12 col-md-6">
        <Image src={imageUrl} alt="" />
      </div>
    </Wrapper>
  );
};

export default ServiceCardLeft;

const Wrapper = styled.div`
  margin: 30px 0px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin: 10px 0px;

  h2 {
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
  }

  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }

  p {
    font-size: 16px;
    font-weight: 400px;
    line-height: 30px;
  }

  @media screen and (max-width: 767px) {
    border: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
