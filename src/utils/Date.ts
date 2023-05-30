type DateAttribute = string | Date;

/**
 * Sets the past time representation for a given date attribute.
 * @param {DateAttribute} dateAttribute - The date attribute to convert to a past time representation.
 * @returns {string} - The past time representation of the given date attribute.
 */
export default function DateFormatter() {
  function getStringDate(dateAttribute: DateAttribute) {
    const date = new Date(dateAttribute);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return "yesterday";
    } else if (hours > 0) {
      return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds > 0) {
      return `${seconds} sec${seconds === 1 ? "" : "s"} ago`;
    } else {
      return date.toLocaleDateString();
    }
  }
  function formatCreatedDate(dateAttribute: DateAttribute) {
    const currentDate = new Date();
    const createdDate = new Date(dateAttribute);

    if (currentDate.getDate() === createdDate.getDate()) {
      // Same day, return the time
      const hours = createdDate.getHours().toString().padStart(2, "0");
      const minutes = createdDate.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    } else if (currentDate.getDate() - createdDate.getDate() === 1) {
      // Yesterday
      return "Yesterday";
    } else {
      // Return the date in the format DD/MM/YYYY
      const day = createdDate.getDate().toString().padStart(2, "0");
      const month = (createdDate.getMonth() + 1).toString().padStart(2, "0");
      const year = createdDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
  return {
    getStringDate,
    formatCreatedDate,
  };
}
