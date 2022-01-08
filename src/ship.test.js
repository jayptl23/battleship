import {shipFactory} from './ship'
test.only('make a ship object', () => {
	expect(shipFactory([0, 1, 2])).toEqual({})
})
