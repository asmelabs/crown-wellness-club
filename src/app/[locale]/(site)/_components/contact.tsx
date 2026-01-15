import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './contact-form';

const contactCards: Array<{ title: string; value: string; icon: IconName }> = [
  {
    title: 'Phone',
    value: '+994 (12) 555-0101',
    icon: 'phone',
  },
  {
    title: 'Email',
    value: 'hello@crownwellness.az',
    icon: 'mail',
  },
  {
    title: 'Operating Hours',
    value: 'Mon–Sun • 6:00 AM – 11:00 PM',
    icon: 'clock',
  },
  {
    title: 'Address',
    value: 'Baku, Azerbaijan • Nizami St 45',
    icon: 'map-pin',
  },
];

export function Contact() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Get In Touch</h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club
            Azerbaijan&apos;s premier destination.
          </p>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]'>
          <div className='space-y-6'>
            <div className='grid gap-4 sm:grid-cols-2'>
              {contactCards.map((card) => (
                <Card key={card.title} className='h-full'>
                  <CardContent className='flex flex-col gap-3'>
                    <div className='flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40'>
                      <DynamicIcon name={card.icon} className='size-6 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-semibold'>{card.title}</p>
                      <p className='text-sm text-muted-foreground'>{card.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className='overflow-hidden p-0'>
              <div className='relative h-64 w-full'>
                <iframe
                  title='Crown Wellness Club Location'
                  src='https://www.google.com/maps?q=Baku%2C%20Azerbaijan&z=13&output=embed'
                  className='h-full w-full border-0'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </Card>
          </div>

          <Card className='h-full'>
            <CardContent className='space-y-6'>
              <div>
                <h3 className='text-2xl font-semibold'>Send Us a Message</h3>
                <p className='text-sm text-muted-foreground'>We&apos;ll get back to you within 24 hours.</p>
              </div>
              <ContactForm />
              <p className='text-xs text-muted-foreground'>
                By submitting this form, you agree to be contacted by our team. We respect your privacy and will never
                share your information with third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
