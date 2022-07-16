export const Navigation = () => {
  return (
    <>
      <ul
        className="nav nav-pills nav-justified mb-4 flex list-none flex-col flex-wrap pl-0 md:flex-row"
        id="pills-tabJustify"
        role="tablist"
      >
        <li
          className="nav-item my-2 flex-grow text-center md:mr-2"
          role="presentation"
        >
          <a
            href="#pills-homeJustify"
            className="
      nav-link
      active
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight focus:outline-none
      focus:ring-0
    "
            id="pills-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#pills-homeJustify"
            role="tab"
            aria-controls="pills-homeJustify"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li
          className="nav-item my-2 flex-grow text-center md:mx-2"
          role="presentation"
        >
          <a
            href="#pills-profileJustify"
            className="
      nav-link
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none focus:ring-0
    "
            id="pills-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#pills-profileJustify"
            role="tab"
            aria-controls="pills-profileJustify"
            aria-selected="false"
          >
            Much longer nav link
          </a>
        </li>
        <li
          className="nav-item my-2 flex-grow text-center md:ml-2"
          role="presentation"
        >
          <a
            href="#pills-contactJustify"
            className="
      nav-link
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none focus:ring-0
    "
            id="pills-contact-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#pills-contactJustify"
            role="tab"
            aria-controls="pills-contactJustify"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContentJustify">
        <div
          className="active show tab-pane fade"
          id="pills-homeJustify"
          role="tabpanel"
          aria-labelledby="pills-home-tabJustify"
        >
          Tab 1 content justify
        </div>
        <div
          className="fade tab-pane"
          id="pills-profileJustify"
          role="tabpanel"
          aria-labelledby="pills-profile-tabJustify"
        >
          Tab 2 content justify
        </div>
        <div
          className="fade tab-pane"
          id="pills-contactJustify"
          role="tabpanel"
          aria-labelledby="pills-contact-tabJustify"
        >
          Tab 3 content justify
        </div>
      </div>
    </>
  );
};
