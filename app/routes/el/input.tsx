import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
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

      <select id="select">
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>

      <select id="select_multiple" multiple>
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>

      <label htmlFor="checkbox1">
        <input
          id="checkbox1"
          name="checkbox"
          type="checkbox"
          checked
        />{" "}
        Choice A
      </label>

      <label htmlFor="checkbox2">
        <input id="checkbox2" name="checkbox" type="checkbox" /> Choice B
      </label>

      <label htmlFor="checkbox3">
        <input id="checkbox3" name="checkbox" type="checkbox" /> Choice C
      </label>

      <label htmlFor="radio1">
        <input
          id="radio1"
          name="radio"
          type="radio"
          checked
        />{" "}
        Option 1
      </label>

      <label htmlFor="radio2">
        <input id="radio2" name="radio" type="radio" /> Option 2
      </label>

      <label htmlFor="radio3">
        <input id="radio3" name="radio" type="radio" /> Option 3
      </label>

      <textarea
        id="textarea"
        rows={8}
        cols={48}
        placeholder="Enter your message here"
      >
      </textarea>

      <input type="color" id="ic" value="#c22424" />

      <input type="number" id="in" min="0" max="10" value="5" />

      <input type="range" id="ir" value="10" />

      <input type="date" id="idd" value="1970-01-01" />

      <input type="month" id="idm" value="1970-01" />

      <input type="week" id="idw" value="1970-W01" />

      <input type="time" id="idt" value="1970-01-01T00:00:00Z" />

      <input
        type="datetime-local"
        id="idtl"
        value="1970-01-01T00:00"
      />

      <input type="text" id="idl" list="example-list" />{" "}
      <datalist id="example-list">
        <option value="Example #1"></option>
        <option value="Example #2"></option>
        <option value="Example #3"></option>
      </datalist>

      <input type="submit" value="<input type=submit>" />
      <input type="button" value="<input type=button>" />
      <input type="reset" value="<input type=reset>" />
      <input type="submit" value="<input disabled>" disabled />
    </>
  );
}
