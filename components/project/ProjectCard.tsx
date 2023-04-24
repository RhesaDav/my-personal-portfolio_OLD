import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

interface ProjectInterface {
  project: {
    title?: string;
    description?: string;
    imageUrl?: string;
    details?: string;
  };
}

const ProjectCard = ({ project }: ProjectInterface) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg">
      <Image
        width={1000}
        height={1000}
        className="w-full object-cover object-center h-64"
        src={project.imageUrl || ""}
        alt="1"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <button
          onClick={handleOpenModal}
          className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
        >
          View Project
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
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
              {project.title}
            </Dialog.Title>
            <div className="mt-2">
              <Image
                src={project.imageUrl || ''}
                alt={project.title || ''}
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-500">
                {project.details}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={handleCloseModal}
              >
                Gotcha !!
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>

    </div>
  );
};

export default ProjectCard;
