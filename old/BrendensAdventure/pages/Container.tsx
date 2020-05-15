import { React } from 'Imports'

// import { GameBrendensAdventure } from './GameBrendensAdventure/GameBrendensAdventure'

import {
  ExternalLink,
  InternalLink,
} from 'components/elements'


export class Container extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ExternalLink url='https://steviebushman.com' title='Back to StevieBushman.com' />
        <h2>Brendens Adventure! <small>a short romp by Brenden and Stevie</small></h2>
        <div style={{ padding: 50, maxWidth: 1000 }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
