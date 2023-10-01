import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import InstructorInfo from "./InstructorInfo";
import { Dialog, Transition } from "@headlessui/react";
const Instructors = () => {
  const [allMentor, setMentor] = useState([]);

  useEffect(() => {
    fetch("https://side-of-server.vercel.app/myclass")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMentor(data);
      });
  }, []);

  console.log(allMentor);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  function openModal(instructor) {
    setSelectedInstructor(instructor);
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setSelectedInstructor(null);
    setIsOpen(false);
  }
  return (
    <div className="container mx-auto p-8 py-28">
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 text-left">#</th>
              <th className="px-4 py-2 bg-gray-200 text-left">Image</th>
              <th className="px-4 py-2 bg-gray-200 text-left">
                Instructor Name
              </th>
              <th className="px-4 py-2 bg-gray-200 text-left">
                Instructor Email
              </th>
              <th className="px-4 py-2 bg-gray-200 text-left">Classes Name</th>
              <th className="px-4 py-2 bg-gray-200 text-left">details</th>
            </tr>
          </thead>
          <tbody>
            {allMentor.map((instructor, index) => (
              <tr key={instructor._id}>
                <td>{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={instructor?.instructorImage}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{instructor.name}</td>
                <td className="px-4 py-2">{instructor.email}</td>
                <td className="px-4 py-2">{instructor.className}</td>
                {/* <td className="px-4 py-2">
                <Link to={`/instructors/${instructor._id}`} className="btn btn-primary btn-sm">
                 info
                </Link>
              </td> */}
                <td className="px-4 py-2">
                  <button
                    type="button"
                    onClick={() => openModal(instructor)}
                    className="btn btn-primary btn-sm text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedInstructor && (
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
                    >
                    
                    </Dialog.Title>
                   
                    <div className="card card-compact w-80 bg-base-100 ">
                      <figure>
                        <img
                          src= {selectedInstructor.classImage}
                          alt="name"
                        />
                      </figure>
                      <div className="card-body">
                       <div className="flex items-center gap-2 my-4">
                       <img className="h-14 w-14 rounded-full"  src= {selectedInstructor.instructorImage}
                          alt="name" />
                        <h2 className="card-title"> {selectedInstructor.name}</h2>
                       </div>
                        <p className="text-lg text-black">
                          Email: {selectedInstructor.email}
                          
                        </p>
                        <div className="flex items-center ">
                        <p className="text-lg text-black">
                          seats: {selectedInstructor.seats}
                        </p>
                        <p className="text-lg text-black">
                          price: {selectedInstructor.price}
                        </p>
                        <p className="text-lg text-black">
                          student: {selectedInstructor.students}
                        </p>
                        </div>
                        <p className="text-lg text-black">
                          status: {selectedInstructor.status}
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

export default Instructors;
