import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styled from 'styled-components'

import { device } from '../../theme';

export const List = styled.ul`
  margin: 0 ${({ theme }) => theme.margin[2]};
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${({ theme }) => theme.spacing[2]};
  row-gap: ${({ theme }) => theme.spacing[2]};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }

  li {
    min-width: 0;
    min-height: 0;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin[2]};
`

export const Separator = styled(SeparatorPrimitive.Root)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: ${({ theme }) => theme.margin[3]} ${({ theme }) => theme.margin[2]};

  &[data-orientation=horizontal] {
    height: 4px;
    width: auto;
  }
`