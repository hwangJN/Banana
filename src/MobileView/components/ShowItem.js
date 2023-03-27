import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemObj } from "../ItemObj";
const ItemDiv = styled.div`
  width: 100%;
  height: auto;
  font-family: "Pretendard";
  min-height: calc(100vh - 360px - 160px); ;
`;
const ItemTitle = styled.span``;
const ItemContent = styled.span``;
const ItemArea = styled.span``;
const ItemTimeAgo = styled.span``;
const ItemText = styled.div`
  width: 60%;
  margin-top: 10px;
  ${ItemTitle} {
    font-size: 15px;
    font-weight: 800;
    display: block;
    margin-bottom: 7px;
  }
  ${ItemContent} {
    display: block;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    height: 20px;
    font-size: 13px;
    width: 100%;
    margin-bottom: 0px;
  }
  ${ItemArea} {
    margin-right: 6px;
    font-size: 12px;
    color: gray;
  }
  ${ItemTimeAgo} {
    font-size: 11px;
    color: gray;
  }
`;
const ItemImg = styled.img`
  width: 24%;
  height: 100%;
`;
const Item = styled.div`
  height: 90px;
  border-bottom: 1px solid #b6b6b663;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const EmptyPage = styled.div`
  width: 100%;
  height: calc(100vh - 360px - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

function ShowItem({ main, sub }) {
  const filterItemObj = ItemObj.filter(
    (item) => item.main === main && item.sub === sub
  );

  return (
    <>
      {filterItemObj.length > 0 ? (
        <ItemDiv>
          {filterItemObj.map((item, index) => (
            <Link to={`/clothes/${item.id}`} key={item.id}>
              <Item>
                <ItemText>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemContent>{item.content}</ItemContent>
                  <ItemArea>{item.area}</ItemArea>
                  <ItemTimeAgo>{item.timeAge}</ItemTimeAgo>
                </ItemText>
                <ItemImg src={require(`../../Img/${item.img[0]}.jpg`)} />
              </Item>
            </Link>
          ))}
        </ItemDiv>
      ) : (
        <EmptyPage>나눔이 없습니다</EmptyPage>
      )}
    </>
  );
}
export default ShowItem;
