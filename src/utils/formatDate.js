import React from 'react'

const FormatDate = (unix_time) => {
   if (!unix_time || unix_time === 0) return null;

   const formatted = new Date(unix_time * 1000)

   return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit"
   });
};

export default FormatDate