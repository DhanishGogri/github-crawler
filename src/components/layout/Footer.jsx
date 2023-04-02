import React from "react"

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer mt-10 p-4 text-accent-content bg-primary footer-center">
      <div>
        <p className=" ">copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
