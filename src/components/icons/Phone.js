import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../../utility/variables'

const PhoneStyled = styled.svg`
  height: 30px;
  padding: 4px;
  fill: ${colors.white};

  @media (${breakpoints.large}) {
    fill: ${props => (props.front ? colors.white : colors.secondaryTwo)};
  }
`

const Phone = ({ front }) => {
  return (
    <>
      <PhoneStyled
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 503.604 503.604"
        front={front}
      >
        <path d="M337.324 0H167.192c-28.924 0-53.5 23.584-53.5 52.5v398.664c0 28.916 24.056 52.44 52.98 52.44l170.412-.184c28.92 0 52.58-23.528 52.58-52.448l.248-398.5C389.908 23.452 366.364 0 337.324 0zM227.68 31.476h49.36c4.336 0 7.868 3.52 7.868 7.868 0 4.348-3.532 7.868-7.868 7.868h-49.36a7.865 7.865 0 01-7.868-7.868 7.865 7.865 0 017.868-7.868zm-29.66 2.504c2.916-2.912 8.224-2.952 11.136 0a7.973 7.973 0 012.324 5.588c0 2.048-.864 4.088-2.324 5.548-1.452 1.46-3.504 2.32-5.548 2.32-2.084 0-4.088-.86-5.588-2.32-1.452-1.456-2.28-3.5-2.28-5.548-.004-2.088.828-4.132 2.28-5.588zm52.752 454.028c-12.984 0-23.544-10.568-23.544-23.548 0-12.984 10.56-23.548 23.544-23.548s23.544 10.564 23.544 23.548c0 12.98-10.564 23.548-23.544 23.548zm114.716-63.1H141.232V74.756h224.256v350.152z" />
      </PhoneStyled>
    </>
  )
}

export default Phone