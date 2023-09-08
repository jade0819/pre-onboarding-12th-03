import { styled } from 'styled-components';
import SuggestionListItem from './SuggestionListItem';
import { isEmptyObject } from '../../utils/common';

const SuggestionList = ({ error, datas, selectedIndex }) => {
  return (
    <ListContainer>
      {error && <p>error!</p>}
      {!error && (
        <ul>
          {isEmptyObject(datas) && <span>검색어 없음</span>}
          {datas &&
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
      )}
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
