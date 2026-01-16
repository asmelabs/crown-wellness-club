import { ContactCardsList } from './contact-cards-list';
import { ContactFormWrapper } from './contact-form-wrapper';
import { ContactHeader } from './contact-header';
import { contactCards } from './data';
import { EmbedMap } from './embed-map';

export function ContactSection() {
  return (
    <section id='contact' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <ContactHeader />

        <div className='mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]'>
          <div className='space-y-6'>
            <ContactCardsList cards={contactCards} />

            <EmbedMap />
          </div>

          <ContactFormWrapper />
        </div>
      </div>
    </section>
  );
}
