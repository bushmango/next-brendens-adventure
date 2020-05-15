import { React, createLogger, bind, memoizeBind, _, FontAwesome } from 'Imports'

import {
  Block,
  BlockContainer,
  Quote,
  CenterPanel,
  ColumnTwo,
} from 'components/elements'

import { GameBrendensAdventure } from 'apps/BrendensAdventure/game/GameBrendensAdventure'

export class PageHome extends React.Component<any, any> {

  state = {
    test: '-',
    count: 0,
  }

  render() {

    return (
      <div style={{ fontFamily: "'PT Sans', sans-serif", marginTop: '20px' }}>

        <CenterPanel>

          test brendens adventure

          <GameBrendensAdventure />

        </CenterPanel>


      </div>
    )
  }
}
