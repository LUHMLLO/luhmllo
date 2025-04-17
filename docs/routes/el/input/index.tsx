import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <input id="input__text" type="text" placeholder="Text Input" />

      <input
        id="input__password"
        type="password"
        placeholder="Type your Password"
      />

      <input
        id="input__webaddress"
        type="url"
        placeholder="https://yoursite.com"
      />

      <input
        id="input__emailaddress"
        type="email"
        placeholder="name@email.com"
      />

      <input
        id="input__phone"
        type="tel"
        placeholder="(999) 999-9999"
      />

      <input
        id="input__search"
        type="search"
        placeholder="Enter Search Term"
      />

      <input
        id="input__text2"
        type="number"
        placeholder="Enter a Number"
      />

      <input id="input__file" type="file" />

      <input type="number" id="in" min="0" max="10" value="5" />

      <input type="date" id="idd" value="1970-01-01" />

      <input type="month" id="idm" value="1970-01" />

      <input type="week" id="idw" value="1970-W01" />

      <input type="time" id="idt" value="1970-01-01T00:00:00Z" />

      <input
        type="datetime-local"
        id="idtl"
        value="1970-01-01T00:00"
      />

      <input type="submit" value="<input type=submit>" />
      <input type="button" value="<input type=button>" />
      <input type="reset" value="<input type=reset>" />
      <input type="submit" value="<input disabled>" disabled />
    </x-grid>
  );
}
