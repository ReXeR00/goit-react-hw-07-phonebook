import { Margin, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from 'redux/Slices/filterSlice';

const Filter = () => {
  const dispach = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Margin>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={e => dispach(setFilter(e.target.value.trim()))}
        />
      </Label>
    </Margin>
  );
};

export default Filter;
