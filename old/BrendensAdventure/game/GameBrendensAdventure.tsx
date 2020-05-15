import { React, createLogger, _, bind } from 'Imports'
const logger = createLogger('brendens-adventure')

import { initLocations, ILocation } from 'apps/BrendensAdventure/game/locations'
import { initItems, IItem } from 'apps/BrendensAdventure/game/items'

let locations: ILocation[]
let items: IItem[]

function _gameRestart() {
  locations = initLocations()
  items = initItems()
}
_gameRestart()

interface IState {
  text: string,
  locationId: string,
  inventory: IItem[],
  gold: number,
}
export class GameBrendensAdventure extends React.Component<any, Partial<IState>> {

  state: IState = {
    text: '',
    locationId: 'road',
    inventory: [],
    gold: 0,
  }

  @bind
  _restart() {
    _gameRestart()
    this.setState({
      locationId: 'road',
      inventory: [],
      gold: 5,
    })
  }

  @bind
  _forceUpdate() {
    this.forceUpdate()
  }

  componentWillMount() {
    this._restart()
  }

  @bind
  _navigateToDirection(direction) {

    let nextLoc = direction.toLocationId
    if (direction.action) {
      nextLoc = direction.action(this.state.inventory)
    }

    if (nextLoc === '_restart') {
      this._restart()
    } else {
      this.setState({ locationId: nextLoc })
    }

  }

  @bind
  _lookupItem(itemId): IItem {
    let item = _.find(items, (c) => c.id === itemId)
    if (!item) { _.find(items, (c) => c.id === 'error') }
    return item
  }

  @bind
  _buyItem(location, itemInfo) {

    if (this.state.gold >= itemInfo.cost) {
      let newState: Partial<IState> = {}
      newState.gold = this.state.gold - itemInfo.cost
      newState.inventory = _.clone(this.state.inventory)

      let item = this._lookupItem(itemInfo.id)

      newState.inventory.push(item)
      _.remove(location.shop, itemInfo)
      this.setState(newState)
    }

  }

  @bind
  _equip(item) {
    item.isEquipped = true
    this._forceUpdate()
  }
  @bind
  _unequip(item) {
    item.isEquipped = false
    this._forceUpdate()
  }

  render() {

    let location = _.find(locations, (c) => c.id === this.state.locationId)
    if (!location) {
      location = _.find(locations, (c) => c.id === 'error')
    }

    return (
      <div style={{ fontSize: '2em', lineHeight: '1.25em' }}>

        <strong>{location.id}</strong>
        <div>
          {location.desc}

        </div>
        <div>
          <br />
          Go ... <br />
          {_.map(location.directions, (c, cIdx) => (
            <div key={cIdx}>
              <a href='#' onClick={() => { this._navigateToDirection(c) }}>{c.id}</a>
            </div>
          ))}
        </div>

        {location.shop ? <div>
          <br />
          Buy ... <br />
          {_.map(location.shop, (c, cIdx) => (
            <div key={cIdx}>
              <a href='#' onClick={() => { this._buyItem(location, c) }}>{c.id} ({c.cost} gold)</a>
            </div>
          ))}
        </div> : null
        }

        <div>
          <br />
          You have {this.state.gold} coins and ... <br />
          {this.state.inventory.length === 0 ? 'no items' : ''}
          {_.map(this.state.inventory, (c, cIdx) => (
            <div key={cIdx}>
              <a href='#' onClick={() => { }}>
                {c.id}
              </a>
              {c.equippable && !c.isEquipped ? <span> unequipped <a href='#' onClick={() => { this._equip(c) }}>(equip)</a></span> : ''}
              {c.equippable && c.isEquipped ? <span> equipped <a href='#' onClick={() => { this._unequip(c) }}>(unequip)</a></span> : ''}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 200 }}>
          DevTools: <a href='#' onClick={() => { this._restart() }}>Restart</a>
        </div>

      </div>
    )
  }
}
