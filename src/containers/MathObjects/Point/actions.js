import {
  // toggleProperty,
  setProperty,
  createMathObject
} from 'containers/MathObjects/actions'
import { POINT } from 'containers/MathObjects/mathObjectTypes'

export const setCoords = (id, value) => {
  return setProperty(id, POINT, 'coords', value)
}

export const createPoint = (id, parentFolderId, positionInFolder) => {
  const settings = { description: 'Point' }
  return createMathObject(id, POINT, parentFolderId, positionInFolder, settings)
}