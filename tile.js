/* tile.js
UPDATE
	Tile[] tiles
	Entity[] newObjs
	int[] drops

Entity
	short objectType
	Status status

Tile
	short x
	short y
	int type
*/

var ID_UPDATE = $.findPacketId("UPDATE");

function onServerPacket(event) {
	var packet = event.getPacket();
	if (packet.id() == ID_UPDATE) {
		//in the future: if (mapname == "Sprite World")
		
		//replace tiles
		for (var i = 0; i < packet.tiles.length; i++) {
			if (packet.tiles[i].type == 254)
				packet.tiles[i].type = 88;
		}

		//replace objects
		for (var j = 0; j < packet.newObjs.length; j++) {
			switch (packet.newObjs[j].objectType){
			case 459: //mystery box to pet upgrader = 8747, 1876
				packet.newObjs[j].objectType = 353;
				break;
			case 484:
				packet.newObjs[j].objectType = 276;
				break;
			}
		}
	}
}