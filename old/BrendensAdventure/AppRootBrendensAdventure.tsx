import { React, _ } from 'Imports'

// import { WindowResizeDetector } from 'WindowResizeDetector'
// import { WebSocketStatus } from 'WebSocketStatus'
import { MountMaterialUI } from 'components/shared/MountMaterialUI'

import { Container } from 'apps/BrendensAdventure/pages/Container'
import { PageHome } from 'apps/BrendensAdventure/pages/PageHome'

export class AppRootBrendensAdventure extends React.Component<any, {}> {

  render() {

    return (
      <div>
        <div>

          <div>
            <MountMaterialUI>
              {/* <WindowResizeDetector /> */}
              <Container>
                <PageHome />
              </Container>
            </MountMaterialUI>
          </div>

        </div>
        <hr className='style-three' />
        by Stevie Bushman and Brenden Bushman
      </div>
    )
  }
}


