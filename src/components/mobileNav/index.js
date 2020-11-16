import { useState, useEffect, useRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  openMobileMenu,
  logout,
  startAsyncCall,
  stopAsyncCall,
} from '../../store/actions';
import Background from '../../components/gradientBackground';

import { WORK_PROVIDER, FREELANCER } from '../../lib/types';

export default function MobileNav() {
  const dispatch = useDispatch();
  const router = useRouter();

  const type = useSelector((state) => state.root.user.type);
  const { authenticated, mobileMenuOpen } = useSelector((state) => state.root);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavShow = () => dispatch(openMobileMenu());

  return (
    mobileMenuOpen && (
      <div className="fixed w-full h-full mobileNav-backdrop">
        <div
          className={`fixed left-0 top-0 bottom-0 flex justify-center items-center transition-all duration-300 ease-in-out mobileNav flex sm:hidden`}>
          <span
            onClick={() => handleMobileNavShow()}
            className="fixed top-0 right-0 mt-6 mr-8">
            <IconContext.Provider
              value={{
                className: 'text-white text-xl ml-3',
              }}>
              <FaTimes />
              <span className="text-white text-md">Close</span>
            </IconContext.Provider>
          </span>
          <div className="px-8 md:px-24 flex flex-col items-center justify-center">
            <ul className="flex-1 flex-col m-0 flex sm:hidden">
              <li className="mb-6">
                <Link href="/dashboard/projects/draft">
                  <a className="flex items-center no-underline text-white text-2xl whitespace-no-wrap">
                    <span>Search</span>
                    <IconContext.Provider
                      value={{
                        className: 'text-white text-xl ml-3',
                      }}>
                      <FaSearch />
                    </IconContext.Provider>
                  </a>
                </Link>
              </li>
              {type === WORK_PROVIDER ? (
                <Fragment>
                  <li className="mb-3">
                    <Link href="/dashboard/projects/draft">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/dashboard/application-list">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        Payment Portal
                      </a>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/dashboard/offers">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        Messages
                      </a>
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="mb-3">
                    <Link href="/dashboard/my-projects">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        My Projects
                      </a>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/dashboard/application-list">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        Applications
                      </a>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/dashboard/offers">
                      <a className="no-underline text-white text-2xl whitespace-no-wrap">
                        Offers
                      </a>
                    </Link>
                  </li>
                </Fragment>
              )}

              <li className="ml-0">
                {authenticated && (
                  <button
                    onClick={() => handleLogout()}
                    title="Log out"
                    className="sm:hidden flex items-center">
                    <span className="no-underline text-white text-2xl whitespace-no-wrap">
                      Log Out
                    </span>
                    <IconContext.Provider
                      value={{
                        className: 'text-white text-2xl ml-3',
                      }}>
                      <FaSignOutAlt />
                    </IconContext.Provider>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
}
