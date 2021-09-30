import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-green-400 sticky top-0">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">{siteTitle}</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      {/*

        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-gray-500 mr-4">
        Awards
      </a>
      <a href="/skills" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-gray-500 mr-4">
        Skills
      </a>

      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-gray-500 mr-4">
        Works
      </a>
      */}
      
    </div>
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
