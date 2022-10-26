import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import * as Styled from './styled'

interface ToggleGroupProps {
  id: string
  label?: string
  values: Array<string>
  onChange: (key: string) => void
  type?: 'single' | 'multiple'
}

const ToggleGroup = ({ 
  id,
  values,
  label,
  onChange,
  type = 'single' 
}: ToggleGroupProps) => (
  <>
    {label?.length &&  <Styled.ToggleLabel htmlFor={id}>{label}</Styled.ToggleLabel>}
    <ToggleGroupPrimitive.Root type={type} onValueChange={(value) => onChange(value)}>
      {values.map(value => (
        <Styled.ToggleItem key={value} value={value}>{value}</Styled.ToggleItem>
      ))}
    </ToggleGroupPrimitive.Root>
  </>
)

export default ToggleGroup