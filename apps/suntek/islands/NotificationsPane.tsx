import { isNotificationsPaneActive } from "#lib/stores/notificationsPane.ts";

export default function NotificationsPane() {
  if (!isNotificationsPaneActive.value) return null;

  return (
    <aside id="pane_notifications" className="pane">
      <div className="place-items-center flex h-[50px] gap-xs px-md">
        <p>Notifications</p>
        <button
          className="contents"
          type="button"
          onClick={() => (isNotificationsPaneActive.value = false)}
        >
          <i className="icon">close_small</i>
        </button>
      </div>

      <label htmlFor="searchbar">
        <i className="icon">search</i>
        <input
          type="text"
          className="w-full"
          name="searchbar"
          placeholder="Type in to filter list"
        />
      </label>
    </aside>
  );
}
