import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Modal = ({
  show,
  onClose,
  image,
  description,
  authorImage,
  likesCount,
  user,
  socialLinks,
  tags,
}) => {
  return show ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="w-3/4 max-w-4xl bg-white rounded-lg p-4 overflow-y-auto">
        <div className="flex justify-between items-center">
          <button className="text-red-600 text-2xl" onClick={onClose}>
            X
          </button>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 max-h-96 overflow-hidden">
            <img
              src={image}
              alt="Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/2 ml-4">
            <div className="w-16 h-16 rounded-full">
              <img
                src={authorImage}
                alt="Author"
                className="w-16 h-16 rounded-full"
              />
            </div>

            <div className="flex items-center">
              <h1 className="text-2xl">{user.name}</h1>
              <FontAwesomeIcon icon={faThumbsUp} className="ml-5 " />
              <span className="text-gray-900 ml-2 text-md text-black">
                {likesCount}
              </span>
            </div>

            <blockquote class="text-md font-semibold text-gray-400 dark:text-white mt-5">
              <svg
                class="w-8 h-8 text-gray-100 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p className="text-black capitalize ">{description}</p>
            </blockquote>

            <div className="mt-4">
              <>
                <a
                  href={socialLinks[0]}
                  className="mb-4 inline-block"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fa-2x mr-4" />
                </a>
                <a
                  href={socialLinks[1]}
                  className="mb-4 inline-block"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                </a>
              </>

              {console.log("sociail", socialLinks)}
            </div>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out capitalize"
                >
                  {tag.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;