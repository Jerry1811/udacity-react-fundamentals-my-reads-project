import React from 'react'
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div
      className="Footer"
      style={{
        backgroundColor: 'rgb(67, 141, 67, 0.747)',
      }}
    >
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          name="home"
          size="huge"
          style={{
            width: 100,
            height: 100,
            padding: 20,
            color: '#000',
          }}
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          name="github"
          size="huge"
          style={{
            width: 100,
            height: 100,
            padding: 20,
            color: '#000',
          }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jeremiah-hukpati/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="linkedin"
          size="huge"
          style={{
            width: 100,
            height: 100,
            padding: 20,
            color: '#0077b5',
          }}
        />
      </a>
    </div>
  )
}

export default Footer
