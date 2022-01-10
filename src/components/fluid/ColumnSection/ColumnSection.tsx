import React from "react";
import styled from "styled-components";
import Column from "./Column";

const Line = styled.hr<{ isTop: boolean }>`
  margin-top: 2.4rem;
  margin-bottom: ${(props) => (props.isTop ? "2.4rem" : "0")};
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

const ColumnContainer = styled.section`
  padding: 3.2rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  display: flex;

  ${({ theme }) => theme.media.laptop`
  flex-direction: column;
  `}
`;

const ColumnSection = () => {
  return (
    <>
      <Line isTop={true} />
      <ColumnContainer>
        <Column text="공지사항" subtitle="Notice" isNotice={true} />
        <Column text="보도자료" subtitle="Timf News" />
      </ColumnContainer>
      <Line isTop={false} />
    </>
  );
};

export default ColumnSection;
