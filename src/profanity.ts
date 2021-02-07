import BadWords from "bad-words";

const filter = new BadWords();

export function filterMessage(message: string) : string 
{
	return filter.clean(message);
}