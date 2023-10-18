import React, { useContext, useState } from "react";
import { ImageContext } from "../App";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Image = (props) => {
  const image = props.data.urls.small;
  const description = props.data.alt_description;
  const authorImage = props.data.user.profile_image.large;
  const likesCount = props.data.likes;
  const user = {
    name: props.data.user.name,
    socialLinks: [
      props.data.user.social.portfolio_url,
      props.data.user.social.portfolio_url,
    ],
  };
  const tags = props.data.tags;
  // console.log("tags",tags);

  const [modalVisible, setModalVisible] = useState(false);

  const { fetchData, setSearchImage } = useContext(ImageContext);

  const openModal = () => {
    setModalVisible(true);
  };

  // const searchByTag = () => {
  //   setModalVisible(false);
  //   fetchData(`search/photos?page=1&query=${tags[0][1]}&client_id=9WN2yoVeuTsvYFHqW7msB7CwZ4y-nrri7pc5SaQTMMo`)
  //   setSearchImage(tags[0][1])
  // }

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div
        className="max-w-lg rounded overflow-hidden shadow-lg hover:shadow-2xl"
        onClick={openModal}
      >
        <div>
          <img
            className="w-full h-40 rounded"
            src={props.data.urls.small}
            alt="Image description"
          />
        </div>

        <div className="px-6 py-2 ">
          <div className="flex items-center mb-2">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={props.data.user.profile_image.large}
              alt="Author's Image"
            />
            <p class="text-gray-800 text-sm">{props.data.user.name}</p>
            <div className="px-2 py-1 px-2">
              <FontAwesomeIcon icon={faThumbsUp}/>
              <span className="text-gray-800 ml-2">{likesCount}</span>
            </div>
          </div>

          {/* <p className="text-black-700 text-lg italic hover:not-italic font-medium text-center capitalize">
            {props.data.alt_description}
          </p> */}
        </div>
      </div>

      {modalVisible && (
        <Modal
          show={modalVisible}
          onClose={closeModal}
          image={image}
          description={description}
          authorImage={authorImage}
          likesCount={likesCount}
          user={user}
          socialLinks={user.socialLinks}
          tags={tags}
          // search={searchByTag}
        />
      )}
    </>
  );
};

export default Image;
