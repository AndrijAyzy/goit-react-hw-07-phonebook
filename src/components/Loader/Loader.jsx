import { Watch } from 'react-loader-spinner';
import { StyledWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledWrapper>
      <Watch
        height="0"
        width="0"
        radius="48"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledWrapper>
  );
};
