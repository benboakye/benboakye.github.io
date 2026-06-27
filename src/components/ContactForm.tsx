import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { profile } from '../data/profile';

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!compact && (
        <p className="text-xs text-text-muted">
          This form opens your email client (mailto). To use Formspree/Web3Forms, replace this
          component with your endpoint URL.
        </p>
      )}
      <div>
        <label htmlFor={compact ? 'sidebar-name' : 'contact-name'} className="sr-only">
          Name
        </label>
        <input
          id={compact ? 'sidebar-name' : 'contact-name'}
          name="name"
          type="text"
          required
          placeholder="Name"
          className="w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm text-text-main placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor={compact ? 'sidebar-email' : 'contact-email'} className="sr-only">
          Email
        </label>
        <input
          id={compact ? 'sidebar-email' : 'contact-email'}
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm text-text-main placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor={compact ? 'sidebar-message' : 'contact-message'} className="sr-only">
          Message
        </label>
        <textarea
          id={compact ? 'sidebar-message' : 'contact-message'}
          name="message"
          required
          rows={compact ? 3 : 4}
          placeholder="Message"
          className="w-full resize-none rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm text-text-main placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>
      {submitted && (
        <p className="text-xs text-accent-green">Opening your email client…</p>
      )}
    </form>
  );
}
