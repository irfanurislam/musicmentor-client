import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const PopulerClass = ({ classItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedclassItem, setSelectedclassItem] = useState(null);
  function openModal(classItem) {
    setSelectedclassItem(classItem);
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setSelectedclassItem(null);
    setIsOpen(false);
  }

  const { _id, className, classImage, seats, price } = classItem;
  return (
    <div>
      <div className="card card-compact min-h-full bg-base-400 shadow-xl">
        <figure>
          <img
            src={classImage}
            alt="Shoes"
            className="hover:scale-110 transition"
          />
        </figure>
        <div className="card-body flex justify-center items-center ">
          <h2 className="card-title text-center text-2xl">
            Learn: {className}
          </h2>
          <p className="text-lg font-medium">Seats: {seats}</p>
          <p className="text-lg font-medium"> Price: ${price}</p>
          <div className="card-actions justify-end">
            <h2
              onClick={() => openModal(classItem)}
              className="link link-secondary text-xl"
            >
              Details
            </h2>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedclassItem && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    ></Dialog.Title>

                    <div className=" min-h-full bg-base-400 shadow-xl">
                      <figure>
                        <img
                          src={classImage}
                          alt="Shoes"
                          className="hover:scale-110 transition"
                        />
                      </figure>
                      <div className="card-body flex justify-center items-center ">
                        <h2 className="card-title text-center text-2xl">
                          Learn: {className}
                        </h2>
                       <div className="flex items-center justify-center gap-2">
                       <p className="text-lg font-medium">Seats: {seats}</p>
                        <p className="text-lg font-medium"> Price: ${price}</p>
                       </div>
                       <p  className="text-lg font-medium">
                        Duration: 12 week
                       </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default PopulerClass;
