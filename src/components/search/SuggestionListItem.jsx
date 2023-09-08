import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { FaSearch } from 'react-icons/fa';

const SuggestionListItem = ({ data, selectedIndex, index }) => {
  return (
    <ListItemStyle
      style={
        selectedIndex === index
          ? { backgroundColor: colors.lightgray, borderRadius: '30px' }
          : { backgroundColor: colors.white }
      }
    >
      <SearchIcon />
      {data.sickNm}
    </ListItemStyle>
  );
};

export default SuggestionListItem;

const ListItemStyle = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 8px 10px;
  font-size: 16px;
`;

const SearchIcon = styled(FaSearch)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  color: ${colors.gray};
`;
