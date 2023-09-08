import { styled } from 'styled-components';
import SuggestionListItem from './SuggestionListItem';
import { isEmptyObject } from '../../utils/common';

const SuggestionList = ({ datas, selectedIndex }) => {
  return (
    <ListContainer>
      <ul>
        {!datas && <span>검색어 없음</span>}
        {!isEmptyObject(datas) &&
          datas.map((item, index) => {
            return (
              <SuggestionListItem
                key={index}
                data={item}
                selectedIndex={selectedIndex}
                index={index}
              />
            );
          })}
      </ul>
    </ListContainer>
  );
};

export default SuggestionList;

const ListContainer = styled.div`
  width: 490px;
  margin-top: 14px;
  min-height: 180px;
  border-radius: 10px;
  background-color: white;
`;
