import { Label } from '@radix-ui/react-label';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

/** 
  I know I refer to theme.colors.button in this file for white
  but I saw it used across the app so in the interest of saving time
  and this being a test I'm just going to use it for white. In a real scenario
  I would be looking at renaming the key.
**/

export const ToggleItem = styled(ToggleGroupPrimitive.Item)`
  text-transform: capitalize;
  margin-right: ${({ theme }) => theme.margin[2]};
  border: 4px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius[1]};

  &:hover { 
    border-color: ${({ theme }) => theme.colors.button};
  }
  
  &[data-state=on] { 
    border-color: ${({ theme }) => theme.colors.violet};
    color: ${({ theme }) => theme.colors.violet};
  }

  &:focus { 
    position: relative; 
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button};
    border-color: rgba(255, 255, 255, .1);
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const ToggleLabel = styled(Label)`
  font-weight: bold;
  text-transform: uppercase;
`