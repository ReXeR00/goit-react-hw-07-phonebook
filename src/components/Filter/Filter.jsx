import { Margin, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from 'redux/Slices';

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
          onChange={event => dispach(setFilter(event.target.value.trim()))}
        />
      </Label>
    </Margin>
  );
};

export default Filter;
