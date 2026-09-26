'use client';

import { useState } from 'react';
import { Forminit } from 'forminit';

import ShineBorder from '@/components/ui/ShineBorder';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

const forminit = new Forminit();
const FORM_ID = '5s8pxjnrwqh';

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    form.reset();
  }

  const isLoading = status === 'loading';

  return (
    <div id="contact">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" Get In Touch "'
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover={true}
          disabled={false}
        />
      </h1>

      <Title className="pl-2">Contact</Title>

      {/* Contact Form */}
      <ShineBorder
        shineColor={['#6366F1', '#A855F7', '#EC4899']}
        borderWidth={5}
        duration={14}
        className="rounded-xl flex flex-col p-4"
      >
        <form
          className="flex flex-col placse-items-center space-y-8"
          onSubmit={handleSubmit}
        >
          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">First Name:</span>
            <input
              type="text"
              name="fi-sender-firstName"
              placeholder="First name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Last Name:</span>
            <input
              type="text"
              name="fi-sender-lastName"
              placeholder="Last name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Email:</span>
            <input
              type="email"
              name="fi-sender-email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Message:</span>
            <textarea
              name="fi-text-message"
              placeholder="Message (100-1500 characters)"
              rows={10}
              maxLength={1500}
              minLength={100}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </label>

          <input type="hidden" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="btn bg-gradient rounded-xl"
            disabled={isLoading}
          >
            {isLoading && <span className="loading loading-spinner" />}

            {isLoading ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-success bg-success border border-success rounded-lg">
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="text-error bg-error border border-error rounded-lg">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <small className="text-zinc-400">
          Note: I&apos;m not available for hiring.
        </small>
      </ShineBorder>
    </div>
  );
}
