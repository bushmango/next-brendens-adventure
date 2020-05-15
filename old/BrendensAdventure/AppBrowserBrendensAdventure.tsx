import { React, _ } from 'Imports'

import {
  BrowserRouter,
} from 'components/elements'

import { AppRootBrendensAdventure } from 'apps/BrendensAdventure/AppRootBrendensAdventure'

export class AppBrowserBrendensAdventure extends React.Component<any, {}> {

  render() {
    return (
      <BrowserRouter> 
        <AppRootBrendensAdventure />
      </BrowserRouter>
    )
  }
}

