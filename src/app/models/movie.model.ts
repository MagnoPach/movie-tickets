export interface MovieData {
	id: string;
	title: string;
	image: string;
	genres: string[];
}

export interface TheaterData {
	id: string;
	eventId: string;
	name: string;
	address: string;
	addressComplement: string;
	rooms: RoomData[];
}

export interface RoomData {
  name: string;
  types: string[];
  sessions: {
    price: number;
    time:string;
  }
}
