/* eslint-disable react-hooks/exhaustive-deps */
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "@/components/layout";
import Loader from "@/components/shared/loader";
import api from "@/lib/api";
import { useEffect, useState, useRef } from "react";
import Rating from "@/components/ratings";
import ProjectDetails from "@/components/projectdetsilsmodal";
import Icon from "@/components/assets/icons/icons";
import { formatDates } from "@/lib/utils";
import Pagination from "@/components/pagination/pagination";
import { getAuthToken } from "@/lib/auth";
import { toast } from "react-hot-toast";
import axios from "axios";

const meta = {
  title: "Projects - Design Council | MTN Ng",
};

const projectStatus = [
  { status: "Not-presented", id: "0" },
  { status: "Presented", id: "1" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any>([]);
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [clicked, setClicked] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<any>();
  const [selectedProjectToUpdate, setSelectedProjectToUpdate] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    var userD = sessionStorage.getItem("userDetails");
    if (userD != "") {
      setUserDetails(JSON.parse(userD));
    }
  }, []);

  // Get All Projects
  const token = getAuthToken();
  useEffect(() => {
    if (token && userDetails) {
      if (userDetails && userDetails.role === 0) {
        setLoading(true);
        Promise.resolve(
          api(`api/v1/Project/users/${userDetails?.userName}`, {
            token: token,
          })
            .then((res) => {
              setLoading(false);
              return res.json();
            })
            .then((projects) => {
              setProjects(projects.data);
            })
            .catch((err) => {
              console.error("An error occurred:", err);
            })
        );
      } else if (userDetails && userDetails.role === 1) {
        setLoading(true);
        Promise.resolve(
          api(`api/v1/Project/pending/${userDetails.userName}`, {
            token: token,
          })
            .then((res) => {
              setLoading(false);
              return res.json();
            })
            .then((projects) => {
              setProjects(projects.data);
            })
            .catch((err) => {
              console.error("An error occurred:", err);
            })
        );
      } else {
        setLoading(true);
        Promise.resolve(
          api(`api/v1/Project`, {
            token: token,
          })
            .then((res) => {
              setLoading(false);
              return res.json();
            })
            .then((projects) => {
              setProjects(projects.data);
            })
            .catch((err) => {
              console.error("An error occurred:", err);
            })
        );
      }
    }
  }, [token, userDetails, selectedProjectToUpdate]);

  const handleProjectStatusUpdate = (id, item) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        id: id,
        status: item,
      },
    };

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/Project/Update-status`,
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Your project status was updated successfully", {
            position: "top-right",
            style: { height: "70px" },
          });
        }
      })
      .catch((error) => {
        toast.error("Your project status update  failed", {
          position: "top-right",
          style: { height: "70px" },
        });
      });
  };

  const itemsPerPage = 10;

  // Calculate the total number of pages based on itemsPerPage
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // Calculate the starting and ending index of items to be displayed
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = projects.slice(startIndex, endIndex);

  useEffect(() => {
    if (projects.totalProjects > 0) {
      const isIndeterminate =
        selectedProjects.length > 0 &&
        selectedProjects.length < projects.length;
      setChecked(selectedProjects.length === projects.length);
      setIndeterminate(isIndeterminate);

      const node = checkbox.current as any;
      node.indeterminate = isIndeterminate;
    }
  }, [selectedProjects]);

  function toggleAll() {
    setSelectedProjects(checked || indeterminate ? [] : projects);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleShowProjectDetails = (id: any) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <Loader />;
  }
  if (projects && projects.length === 0) {
    return (
      <Layout>
        <div className="my-10 grid place-items-center">
          <div>
            <Icon name="wave" />
            <h2 className="mb-4 text-center text-xl font-bold">
              Welcome {userDetails && userDetails.userName}!
            </h2>
            {userDetails && userDetails.role === 0 ? (
              <p className="text-center text-base font-light">
                {" "}
                <b>You have no projects yet. </b>You can create a Project!{" "}
              </p>
            ) : (
              <p className="text-center text-base font-light">
                {" "}
                <b>You have no projects yet to review. </b>
              </p>
            )}
            <div className="mt-4 text-center">
              {userDetails && userDetails.role === 0 && (
                <Link href="projects/createproject">
                  <button className="rounded-md border-transparent bg-primary px-8 py-4 text-xs text-black">
                    Create project
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout meta={meta}>
      <div className="mt-12 min-h-screen">
        <div className="flex justify-between lg:px-8">
          <h4 className="text-lg font-medium">
            Projects{" "}
            <span className="ml-2 rounded-md bg-[#FFE269] px-3 py-2 text-sm font-light">
              {projects.length}
            </span>
          </h4>
          {userDetails && userDetails.role === 0 && (
            <Link
              href={`${router.pathname}/createproject`}
              className="rounded-md border-transparent bg-primary px-6 py-3 align-middle text-black"
            >
              Create Project
            </Link>
          )}
        </div>

        <div className=" sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  {selectedProjects.length > 0 && (
                    <div className="absolute left-12 top-0 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                      <button
                        type="button"
                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Bulk edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Delete all
                      </button>
                    </div>
                  )}
                  <table className="min-w-full table-fixed divide-y">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="relative w-12 px-6 sm:w-16 sm:px-8"
                        >
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex items-center gap-1">
                            <span>Business Analyst</span> <FaAngleDown />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex items-center gap-1">
                            <span>Product owner</span> <FaAngleDown />
                          </div>
                        </th>
                        {userDetails.role !== 2 && (
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            <div className="flex items-center gap-1">
                              <span>Technical lead</span> <FaAngleDown />
                            </div>
                          </th>
                        )}
                        {userDetails.role === 2 && (
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            <div className="flex items-center gap-1">
                              <span>Project status</span> <FaAngleDown />
                            </div>
                          </th>
                        )}
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex items-center gap-1">
                            <span>Start date</span> <FaAngleDown />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex items-center gap-1">
                            <span>End date</span> <FaAngleDown />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex items-center gap-1">
                            <span>Rating</span>
                            <FaAngleDown />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y bg-white">
                      {itemsToDisplay.map((project) => {
                        console.log("project", project);
                        if (
                          clicked === project.id &&
                          userDetails &&
                          userDetails.role === 1
                        ) {
                          router.push({
                            pathname: `/projects/${project.id}`,
                            query: {
                              project: JSON.stringify(project),
                            },
                          });
                        }
                        return (
                          <tr
                            key={project.id}
                            className={
                              selectedProjects.includes(project)
                                ? "bg-gray-50"
                                : undefined
                            }
                            onClick={() => handleShowProjectDetails(project.id)}
                          >
                            <td
                              className="relative w-12 px-6 sm:w-16 sm:px-8"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {selectedProjects.includes(project) && (
                                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                              )}
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                value={project.id}
                                checked={selectedProjects.includes(project)}
                                onChange={(e) =>
                                  setSelectedProjects(
                                    e.target.checked
                                      ? [...selectedProjects, project]
                                      : selectedProjects.filter(
                                          (p) => p !== project
                                        )
                                  )
                                }
                              />
                            </td>
                            <td
                              className={classNames(
                                "cursor-pointer whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                selectedProjects.includes(project)
                                  ? "text-indigo-600"
                                  : "text-gray-900"
                              )}
                            >
                              {project.businessAnalyst}
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {project.productOwner}
                            </td>
                            {userDetails.role !== 2 && (
                              <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {project.technicalLead}
                              </td>
                            )}
                            {userDetails.role === 2 && (
                              <select
                                placeholder="select"
                                name="role"
                                className="m-2 w-10/12 rounded-md border-none text-[14px] text-slate-500"
                                onChange={(e) => {
                                  const selectedValue = e.target.value;
                                  (e) =>
                                    setSelectedProjectToUpdate(selectedValue);
                                  handleProjectStatusUpdate(
                                    project.id,
                                    selectedValue
                                  );
                                }}
                                defaultValue={project.status}
                              >
                                {projectStatus.map((item: any, i: any) => (
                                  <option key={i} value={item.id}>
                                    {item.status}
                                  </option>
                                ))}
                              </select>
                            )}
                            <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {formatDates(project.startDate)}
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {formatDates(project.endDate)}
                            </td>
                            <td>
                              <Rating rating={project.rating} />
                            </td>
                            <td>
                              {clicked === project.id &&
                                userDetails &&
                                userDetails.role === 0 && (
                                  <ProjectDetails
                                    handleCloseModal={handleCloseModal}
                                    project={project}
                                  />
                                )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {totalPages > 1 && (
          <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </Layout>
  );
}
