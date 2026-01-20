import { ContactCard } from "./contact-card";
import type { ContactCardType } from "./types";

interface ContactCardsListProps {
	cards: ContactCardType[];
}

export function ContactCardsList({ cards }: ContactCardsListProps) {
	return (
		<div className="grid gap-4 sm:grid-cols-2">
			{cards.map((card) => (
				<ContactCard key={card.title} card={card} />
			))}
		</div>
	);
}
