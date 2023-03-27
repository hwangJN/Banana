import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuSpan = styled.div`
  cursor: pointer;
`;
const MenuDiv = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 65px;
  position: fixed;
  border-radius: 20px 20px 0 0;
  bottom: 0;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  color: #515151;
  font-family: "Pretendard";
  z-index: 998;
`;

const MenuList = [
  { name: "HOME", url: "/" },
  { name: "채팅하기", url: "/" },
  { name: "지역별", url: "/" },
  { name: "마이페이지", url: "/mypage" },
];

function HomeMenu() {
  return (
    <MenuDiv>
      {MenuList.map((Menu, index) => (
        <Link to={Menu.url} key={index}>
          <MenuSpan>{Menu.name}</MenuSpan>
        </Link>
      ))}
    </MenuDiv>
  );
}

export default HomeMenu;
